const exec = require("child_process").exec;

exec(
  `/usr/bin/expect -f spawn scp -r public/ ssh akeem@74.207.224.133:~/`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      console.log(stderr);
    } else {
      console.log(stdout);
    }
  }
);
