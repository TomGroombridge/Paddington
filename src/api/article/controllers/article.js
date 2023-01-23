"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const article = await strapi.entityService.findMany("api::article.article", query);

    const sanitizedEntity = await this.sanitizeOutput(article);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));