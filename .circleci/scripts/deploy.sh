if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

yes | sudo apt-get install expect

# Successfuly logs me into server
.circleci/scripts/expect.sh

# Move public file to /var/www
echo "$(sudo mv public/ /var/www/)"