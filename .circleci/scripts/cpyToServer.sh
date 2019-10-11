#!/usr/bin/expect -f
spawn scp -r public/ ssh $1:~/
expect "$1's password"
send "$2\r"
interact