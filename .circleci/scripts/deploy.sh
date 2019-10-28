if [ $1 = "develop" ]; then
    cpyPublic=false
  elif [ $1 = "master" ]; then
    cpyPublic=true
fi
ip=74.207.224.133

if [ -z `ssh-keygen -F $ip` ]; then
  ssh-keyscan -H $ip >> ~/.ssh/known_hosts
fi

yes | sudo apt-get install expect

# Successfuly logs me into server
if [ $cpyPublic == true ]; then
    .circleci/scripts/cpyToServer.sh ${password}
  elif [ $cpyPublic == false ]; then
    .circleci/scripts/cpyToDevelopServer.sh ${password}
fi