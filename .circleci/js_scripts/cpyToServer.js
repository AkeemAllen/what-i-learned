const exec = require("child_process").exec;

exec(`spawn scp -r public/ ssh akeem@74.207.224.133:~/`);
