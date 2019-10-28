const fs = require("fs");
const exec = require("child_process").exec;

const env = process.argv[2];
let ip;
let server;

if (env == "develop") {
  ip = `74.207.224.133`;
  server = `akeem@74.207.224.133`;
}

// exec(`ssh-keyscan -H ${ip} >> ~/.ssh/known_hosts`, (err, stdout, stderr) => {
//   console.log("Here");
//   if (err) {
//     console.log(err);
//     console.log(stderr);
//   } else {
//     console.log(stdout);
//   }
// });

exec(
  `ssh-keyscan -H ${ip} >> ~/.ssh/known_hosts 
  && printf ${process.env.password} | scp -r /project ssh akeem@74.207.224.133:~/`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  }
);
