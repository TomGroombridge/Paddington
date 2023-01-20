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

  plugin.routes['content-api'].routes.push({
    method: 'PUT',
    path: '/users/onboard',
    handler: 'user.onboard'
  });

  return plugin;
}