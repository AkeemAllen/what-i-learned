#!/usr/bin/expect -f
set pass  [lindex $argv 0];

spawn scp -r public/ ssh akeem@74.207.224.133:~/
expect "akeem@74.207.224.133's password"
send "${pass}\r"
interact