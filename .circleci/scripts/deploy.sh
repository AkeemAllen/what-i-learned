if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

echo "$(ls -a)"
echo "$(ls -a public/)"

# yes | sudo apt-get install expect

# # Successfuly logs me into server
.circleci/scripts/cpyToServer.sh

# # Move public file to /var/www
# # echo "$(sudo mv public/ /var/www/)"
echo "Got Here"