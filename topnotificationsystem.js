const { calculatePriority } = require("./priorityService");
const logger = require("../utils/log");
function getTopNotifications(notifications, limit = 10) {
  const rankedNotifications = notifications
    .map((notification) => ({
      ...notification,
      priority: calculatePriority(notification),
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
  logger.info("Top notifications selected", {
    count: rankedNotifications.length,
  });
  return rankedNotifications;
}
module.exports = {
  getTopNotifications,
};
