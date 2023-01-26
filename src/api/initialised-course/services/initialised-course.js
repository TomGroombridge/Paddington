'use strict';

/**
 * initialised-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::initialised-course.initialised-course');
