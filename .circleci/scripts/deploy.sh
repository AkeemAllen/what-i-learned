if [ -z `ssh-keygen -F 74.207.224.133` ]; then
  ssh-keyscan -H 74.207.224.133 >> ~/.ssh/known_hosts
fi

yes | sudo apt-get install expect
yes | sudo apt-get install sshpass

# # Successfuly logs me into server
.circleci/scripts/cpyToServer.sh
