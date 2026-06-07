require("dotenv").config();
async function getAccessToken() {
  try {
    const requestBody = {
      email: process.env.EMAIL,
      name: process.env.NAME,
      rollNo: process.env.ROLLNO,
      accessCode: process.env.ACCESS_CODE,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    };
    console.log("REQUEST BODY:");
    console.log(requestBody);
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      },
    );
    const data = await response.json();
    console.log("STATUS:", response.status);
    console.log("AUTH RESPONSE:", data);
    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    return data.access_token;
  } catch (error) {
    console.error("AUTH ERROR:", error.message);
    return null;
  }
}
module.exports = getAccessToken;
