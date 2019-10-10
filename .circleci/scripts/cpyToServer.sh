#!/usr/bin/expect -f
spawn scp -r public/ ssh akeem@74.207.224.133:~/
expect "akeem@74.207.224.133's password"
send "akstar4321\r"

spawn ssh akeem@74.207.224.133
expect "akeem@74.207.224.133's password"
send "akstar4321\r"

spawn mv public/ what_i_learned_blog
# send "akstar4321\r"

interact