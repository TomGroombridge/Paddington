module.exports = (plugin) => {
  plugin.controllers.user.onboard = async (ctx) => {
    const { firstName, lastName, occupation } = ctx.request.body;

    if (!firstName || !lastName || !occupation) {
      return ctx.badRequest('field is missing', { firstName, lastName, occupation })
    }
    const user = await strapi.entityService.update('plugin::users-permissions.user', ctx.state.user.id, {
      data: {
        firstName,
        lastName,
        occupation,

      },
      fields: ['firstName', 'lastName', 'occupation']
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
  });

  return plugin;
}