if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

yes | sudo apt-get install expect

# # Successfuly logs me into server
.circleci/scripts/cpyToServer.sh

# /usr/bin/expect <<EOD
# spawn scp -r public/ ssh akeem@74.207.224.133:~/
# expect "akeem@74.207.224.133's password"
# send "akstar4321\r"
# EOD

/usr/bin/expect <<EOD
spawn ssh akeem@74.207.224.133
expect "akeem@74.207.224.133's password"
send "akstar4321\r"
interact
EOD
# # Move public file to /var/www
# # echo "$(sudo mv public/ /var/www/)"
echo "$(ls -a)"