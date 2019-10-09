#!/usr/bin/expect -f
spawn scp public/test.txt ssh akeem@74.207.224.133:~/

expect "akeem@74.207.224.133's password"

send "akstar4321\r"

interact