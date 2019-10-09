if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

curl https://circleci.com/api/v1.1/project/:vcs-type/:AkeemAllen/:what-i-learned/latest/artifacts?circle-token=:$CIRCLE_TOKEN

echo "$(ls -a)"

yes | sudo apt-get install expect

# Successfuly logs me into server
.circleci/scripts/cpyToServer.sh

# Move public file to /var/www
# echo "$(sudo mv public/ /var/www/)"
echo "Got Here"