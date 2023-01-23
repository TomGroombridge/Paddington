"use strict";

/**
 * webinar router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::webinar.webinar");

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
    path: "/webinars/:slug",
    handler: "api::webinar.webinar.findOne",
  },
];

const myExtraRoutes = [
  {
    method: "GET",
    path: "/users/webinars",
    handler: "webinar.users_upcoming_events",
  },
  {
    method: "GET",
    path: "/upcoming_webinars",
    handler: "webinar.upcoming_events"
  }
];

module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
