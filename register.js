async function register() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "mghanta2@gitam.in",
        name: "Ghanta Mohan Karthik",
        mobileNo: "8499082784",
        githubUsername: "Mohankarthik4952",
        rollNo: "2023004641",
        accessCode: "wgKtgZ",
      }),
    },
  );
  const data = await response.json();
  console.log(data);
}
register();
