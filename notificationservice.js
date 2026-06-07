const logger = require("../utils/log");
const getAccessToken = require("../auth/getToken");
const API_URL = "http://4.224.186.213/evaluation-service/notifications";
async function fetchNotifications() {
  try {
    const token = await getAccessToken();
    logger.info("Fetching notifications");
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data.notifications;
  } catch (error) {
    logger.error("Notification fetch failed", {
      message: error.message,
    });
    throw error;
  }
}
module.exports = {
  fetchNotifications,
};
