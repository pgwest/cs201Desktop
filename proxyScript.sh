# Usage: bash ergo-proxy.sh <on off>
# Hitting ctrl-c while tunneled will exit the tunnel and turn the proxies off

STATE=$1

# Get a list of network services: networksetup -listallnetworkservices
NETWORKSERVICE=Wi-Fi

# Local port
PORT=3128

# Remote host
HOST=localhost

# Remote host port
HOST_PORT=8888


# SSH connection string
CONNECTION="$HOME/git-projects/cs201/ec2Instances/201MongoInstance/NZQDRD77.pem ubuntu@ec2-52-89-233-213.us-west-2.compute.amazonaws.com"

########################################################################

sudo echo 'Sudo Up!'

proxy_on() {
  echo 'Proxy On'
  sudo networksetup -setwebproxy $NETWORKSERVICE $HOST $PORT
  sudo networksetup -setsecurewebproxy $NETWORKSERVICE $HOST $PORT
  ssh -L $PORT:$HOST:$HOST_PORT -N -i $CONNECTION
}

proxy_off() {
  echo 'Proxy Off'
  sudo networksetup -setwebproxystate $NETWORKSERVICE off
  sudo networksetup -setsecurewebproxystate $NETWORKSERVICE off
}

control_c() {
  echo '* Exiting'
  proxy_off
  exit $?
}

trap control_c INT

if [[ $STATE = 'on' || $STATE = '' ]]; then
  proxy_on
elif [[ $STATE = 'off' ]]; then
  proxy_off
fi