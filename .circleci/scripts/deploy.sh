#!bin/expect
spawn ssh -tt akeem@74.207.224.133

expect "Long line"

yes|ssh -tt akeem@74.207.224.133<<EOT
