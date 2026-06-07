const { fetchNotifications } = require("./services/notificationService");
const { getTopNotifications } = require("./services/topnotificationsystem");
const logger = require("./utils/log");
async function main() {
  try {
    logger.info("Stage 1 Started");
    const notifications = await fetchNotifications();
    const top10 = getTopNotifications(notifications, 10);
    console.table(
      top10.map((item) => ({
        ID: item.ID,
        Type: item.Type,
        Message: item.Message,
        Timestamp: item.Timestamp,
      })),
    );
    logger.info("Top 10 Generated");
  } catch (error) {
    logger.error("Stage 1 Failed", {
      message: error.message,
    });
  }
}
main();
