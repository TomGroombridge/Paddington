'use strict';

/**
 * quiz controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quiz.quiz', ({ strapi }) => ({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const quiz = await strapi.entityService.findMany("api::quiz.quiz", query);

    const sanitizedEntity = await this.sanitizeOutput(quiz);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));

