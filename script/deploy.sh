#!/bin/sh

ssh ubuntu@13.126.216.165<<EOF
    cd ~/node-app
    git pull origin master
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install v12.4.0
    npm install
    npm install pm2 -g
    pm2 restart ecosystem.config.js
   
    exit
EOF
