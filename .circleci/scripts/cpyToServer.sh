#!/usr/bin/expect -f
spawn scp -r public/ ssh akeem@74.207.224.133:~/

expect "akeem@74.207.224.133's password"

send "akstar4321\r"

interact