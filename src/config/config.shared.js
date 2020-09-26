/**
 * notificationReload: timeout for reloading notifications in seconds
 * permissions: user levels for application
 */

module.exports = {
  notificationReload: 30,
  authorization: {
    clientName: "frontend",
  },
  permissions: {
    0: {
      name: "admin",
    },
  },
};
