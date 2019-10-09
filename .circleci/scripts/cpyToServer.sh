#!/usr/bin/expect -f
spawn scp ~/project/public/test.txt ssh akeem@74.207.224.133:~/

expect "akeem@74.207.224.133's password"

send "akstar4321\r"