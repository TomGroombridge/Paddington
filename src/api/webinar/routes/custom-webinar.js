module.exports = {
  routes: [
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
  ],
}
