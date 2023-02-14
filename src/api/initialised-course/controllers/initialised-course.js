'use strict';

/**
 * initialised-course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::initialised-course.initialised-course', ({ strapi }) => ({
  async users_initialised_courses(ctx) {
    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['initialised_courses', 'initialised_courses.course'] }
    );

    const data = { courses: [...user.initialised_courses] }
    const sanitizedEntity = await this.sanitizeOutput(data, ctx);

    return this.transformResponse(sanitizedEntity);
  },
  async create(ctx) {
    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['initialised_courses', 'initialised_courses.course'] }
    );

    const { data: { slug } } = ctx.request.body;

    const course = await strapi.db.query('api::course.course').findOne({
      where: { slug: slug },
    });

    if (!course) {
      return ctx.badRequest(null, [{ messages: [{ id: 'The request has failed.' }] }]);
    }

    const data = user.initialised_courses.find((init_course) => init_course.course.slug === course.slug)

    if (data) {
      return ctx.badRequest(null, [{ messages: [{ id: 'Course already exists for Customer' }] }]);
    }

    try {
      await strapi.service('api::initialised-course.initialised-course').create({ data: { users_permissions_user: ctx.state.user.id, course: course.id } })
      return ctx.response.status = 200;
    } catch (err) {
      return ctx.badRequest(null, [{ messages: [{ id: 'The request has failed.' }] }]);
    }
  },
  async findOne(ctx) {
    const { slug } = ctx.params;

    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['initialised_courses', 'initialised_courses.course'] }
    );

    const course = user.initialised_courses.filter((course) => {
      return course.course.slug === slug
    })

    if (course.length === 0) {
      return ctx.response.notFound('not found');
    }

    const sanitizedEntity = await this.sanitizeOutput({ ...course });

    return this.transformResponse(sanitizedEntity[0]);
  },
  async action_complete(ctx) {
    const { id } = ctx.params;
    const { slug } = ctx.request.body;

    if (!ctx.state.isAuthenticated) {
      return ctx.unauthorized(['You are not authorised'], []);
    }

    if (!slug) {
      return ctx.response.notFound('not found');
    }

    const { initialised_courses: user_courses } = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: ['initialised_courses'] }
    );

    const current_course = await strapi.entityService.findOne(
      'api::initialised-course.initialised-course',
      id,
      { populate: ['course'] }
    );


    const actions = current_course.course.topics.map((topic) => {
      return topic.steps.map((step) => step.step_slug)
    })

    if (!actions.flat().includes(slug.toString())) {
      return ctx.response.notFound('Invalid action');
    }

    if (current_course?.completed_steps?.includes(slug)) {
      return ctx.response.notFound('Step already added');
    }

    const data = user_courses.find((x) => {
      return x.id === current_course.id
    })

    if (!data) {
      return ctx.response.notFound('not found');
    }

    let newData = [slug]
    if (current_course.completed_steps) {
      newData = [slug, ...current_course.completed_steps]
    }


    await strapi.entityService.update('api::initialised-course.initialised-course', id, {
      data: {
        completed_steps: newData,
      },
      fields: ['completed_steps']
    });

    const new_course = await strapi.entityService.findOne(
      'api::initialised-course.initialised-course',
      id
    );

    const sanitizedEntity = await this.sanitizeOutput(new_course);

    return this.transformResponse(sanitizedEntity);
  }
}))
