#/bin/bash

ng build --prod --aot
sudo cp -rv dist/* /usr/share/nginx/daria.brodzki.org/

