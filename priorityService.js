const weights = require("../constants/priorityWeights");
const logger = require("../utils/log");
function calculatePriority(notification) {
  const weight = weights[notification.Type] || 0;
  const timestamp = new Date(notification.Timestamp).getTime();
  const score = weight * 1000000000000 + timestamp;
  logger.info("Priority calculated", {
    id: notification.ID,
    score,
  });
  return score;
}
module.exports = {
  calculatePriority,
};
