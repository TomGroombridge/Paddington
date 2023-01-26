"use strict";

/**
 * initialised-course router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::initialised-course.initialised-course");

// function to add to or override default router methods
const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOveride.forEach((overide) => {
          if (
            route.handler === overide.handler &&
            route.method === overide.method
          ) {
            found = overide;
          }
        });

        return found || route;
      });

      return newRoutes.concat(extraRoutes);
    },
  };
};

// Overide the default router with the custom router to use slug.
const myOverideRoutes = [
  {
    method: "GET",
    path: "/users/initialised-courses/:slug",
    handler: "api::initialised-course.initialised-course.findOne",
  },
];

const myExtraRoutes = [
  {
    method: "GET",
    path: "/users/initialised-courses",
    handler: "initialised-course.users_initialised_courses",
  },
  {
    method: "POST",
    path: "/initialised-courses/:id/action_complete",
    handler: "initialised-course.action_complete",
  }
];

module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
