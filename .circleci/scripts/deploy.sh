if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

echo "$(ls -a)"
echo "$(ls -a public/)"

yes | sudo apt-get install expect

# # Successfuly logs me into server
# .circleci/scripts/cpyToServer.sh

/usr/bin/expect -c `spawn scp -r public/ ssh akeem@74.207.224.133:~/`
/usr/bin/expect -c `expect "akeem@74.207.224.133's password"`
/usr/bin/expect -c `send "akstar4321\r"`

# # Move public file to /var/www
# # echo "$(sudo mv public/ /var/www/)"
echo "$(ls -a)"
echo "$(exit)"