#/bin/bash

if [[ $( whoami ) != "root" ]] ; then
    echo "Script must be run as root!"
    exit 1
fi

ng build --prod --aot
sudo cp -rv dist/* /usr/share/nginx/daria.brodzki.org/
