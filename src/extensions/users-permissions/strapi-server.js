module.exports = (plugin) => {
  plugin.controllers.user.onboard = async (ctx) => {
    const { firstName, lastName, occupation, mobile } = ctx.request.body;

    if (!firstName || !lastName || !occupation) {
      return ctx.badRequest('field is missing', { firstName, lastName, occupation, mobile })
    }
    const user = await strapi.entityService.update('plugin::users-permissions.user', ctx.state.user.id, {
      data: {
        firstName,
        lastName,
        occupation,
        mobile
      },
      fields: ['firstName', 'lastName', 'occupation', 'mobile']
    });

    return user
  }

  plugin.controllers.user.joinEvent = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }

    const { webinarId } = ctx.request.body

    if (!webinarId) {
      return ctx.badRequest('no webinar supplied')
    }

    // maybe look at checking the webinar is not in the past 
    // check the user has not already signed up to the webinar

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['webinars'] }
    );

    const webinar = await strapi.entityService.findOne(
      'api::webinar.webinar',
      webinarId
    )

    const newData = [...user.webinars, webinar]

    await strapi.entityService.update(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      {
        data: {
          webinars: newData
        }
      }
    );

    try {
      await strapi.plugins['email'].services.email.send({
        to: user.email,
        from: 'abi@elent.com',
        subject: `Successfully Signed up for ${webinar.title}`,
        text: 'Hello world!',
        html: 'Hello world!',
      })
    } catch (error) {
      console.log('SENDGRID ERROR', error.response.body);
    }


    return user
  }

  plugin.controllers.user.unattendEvent = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }

    const { webinarId } = ctx.request.body

    if (!webinarId) {
      return ctx.badRequest('no webinar supplied')
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['webinars'] }
    );

    const newData = user.webinars.filter((webinar) => webinar.id !== webinarId);

    await strapi.entityService.update(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      {
        data: {
          webinars: newData
        }
      }
    );

    return user

  }

  plugin.controllers.user.updateStripeCustomerId = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }

    const { stripe_customer_id } = ctx.request.body

    if (!stripe_customer_id) {
      return ctx.badRequest('no customer id')
    }

    const user = await strapi.entityService.update('plugin::users-permissions.user', ctx.state.user.id, {
      data: {
        stripe_customer_id,
      },
      fields: ['stripe_customer_id']
    });

    return user

  }

  plugin.controllers.user.updateMembership = async (ctx) => {
    const { stripe_customer_id, membership } = ctx.request.body
    const { id } = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { stripe_customer_id: stripe_customer_id },
    });

    if (!id) {
      return ctx.badRequest('no user found')
    }

    const user = await strapi.entityService.update('plugin::users-permissions.user', id, {
      data: {
        membership: membership,
      },
      fields: ['membership']
    });

    return user
  }

  plugin.routes['content-api'].routes.push({
    method: 'PUT',
    path: '/users/onboard',
    handler: 'user.onboard'
  }, {
    method: 'POST',
    path: '/users/events/signup',
    handler: 'user.joinEvent'
  }, {
    method: 'POST',
    path: '/users/events/unattend',
    handler: 'user.unattendEvent'
  }, {
    method: 'PUT',
    path: '/users/update_customer_id',
    handler: 'user.updateStripeCustomerId'
  }, {
    method: 'POST',
    path: '/users/update_membership',
    handler: 'user.updateMembership'
  });

  return plugin;
}