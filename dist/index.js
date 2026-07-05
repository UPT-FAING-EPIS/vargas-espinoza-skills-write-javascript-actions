async function run() {
  const joke = "Why do developers prefer dark mode? Because light attracts bugs.";
  if (process.env.GITHUB_OUTPUT) {
    require("fs").appendFileSync(process.env.GITHUB_OUTPUT, `joke=${joke}\n`);
  }
  console.log(joke);
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

// bundled with ncc build src/main.js -o dist
