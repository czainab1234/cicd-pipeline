#!/bin/sh

ssh -tt ubuntu@18.169.189.7<<EOF
    cd ~/cicd-pipeline
    git pull origin master
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install v12.4.0
    npm install
    npm install pm2 -g
    pm2 restart ecosystem.config.js
   
    exit
EOF
