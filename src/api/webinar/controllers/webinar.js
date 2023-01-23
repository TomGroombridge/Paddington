'use strict';

/**
 * webinar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::webinar.webinar', ({ strapi }) => ({
  async users_upcoming_events(ctx) {
    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['webinars'] }
    );

    const date = new Date();
    const iso = date.toISOString();

    const upcoming_webinars = user.webinars.filter((webinar) => {
      const webinar_time = Date.parse(webinar.date + 'T' + webinar.time);
      const current_time = Date.parse(iso);
      return webinar_time > current_time;
    })

    const sanitizedEntity = await this.sanitizeOutput(upcoming_webinars, ctx);

    return this.transformResponse(sanitizedEntity);
  },
  async upcoming_events(ctx) {
    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    const date = new Date();
    const iso = date.toISOString();

    const upcoming_webinars = await strapi.db.query("api::webinar.webinar").findMany({
      where: { date: { $gte: iso } }
    });

    const sanitizedEntity = await this.sanitizeOutput(upcoming_webinars, ctx);
    return this.transformResponse(sanitizedEntity)
  }
}));
