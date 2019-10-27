#!/usr/bin/expect -f
pass = ${1}
echo ${pass}

spawn scp -r public/ ssh akeem@74.207.224.133:~/
expect "akeem@74.207.224.133's password"
send "${pass}\r"
interact