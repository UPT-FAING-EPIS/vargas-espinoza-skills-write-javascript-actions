const core = require("@actions/core");

async function run() {
  const joke = "Why do developers prefer dark mode? Because light attracts bugs.";
  core.setOutput("joke", joke);
  console.log(joke);
}

run().catch((error) => core.setFailed(error.message));
