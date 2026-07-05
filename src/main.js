const core = require("@actions/core");
const { getJoke } = require("./joke");

async function run() {
  const joke = await getJoke();
  core.setOutput("joke", joke);
  console.log(joke);
}

run().catch((error) => core.setFailed(error.message));
