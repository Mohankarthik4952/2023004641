function info(message, data = {}) {
  console.log(
    JSON.stringify({
      level: "INFO",
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  );
}
function error(message, data = {}) {
  console.error(
    JSON.stringify({
      level: "ERROR",
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  );
}
function warn(message, data = {}) {
  console.warn(
    JSON.stringify({
      level: "WARN",
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  );
}
module.exports = {
  info,
  error,
  warn,
};
