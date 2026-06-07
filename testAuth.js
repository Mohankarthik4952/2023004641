require("dotenv").config();
const getAccessToken = require("./auth/getToken");
async function testAuth() {
  const token = await getAccessToken();
  console.log("\nTOKEN:");
  console.log(token);
}
testAuth();
