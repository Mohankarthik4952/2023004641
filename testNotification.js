require("dotenv").config();
async function testNotification() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}
testNotification();
