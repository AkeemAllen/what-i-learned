const fs = require("fs");
const exec = require("child_process").exec;

const env = process.argv[2];
let ip;
let server;

if (env == "develop") {
  ip = `74.207.224.133`;
  server = `akeem@74.207.224.133`;
}

exec(
  `yes | sudo apt-get install expect` +
    ` && ssh-keyscan -H ${ip} >> ~/.ssh/known_hosts` +
    ` && node .circleci/js_scripts/cpyToServer.js`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  }
);
