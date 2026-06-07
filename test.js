async function test() {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
    );
    console.log(response.status);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
test();
