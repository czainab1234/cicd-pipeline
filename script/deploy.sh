#!/bin/sh

ssh -tt ubuntu@18.169.189.7<<EOF
    cd ~/cicd-pipeline
    git pull origin Master
    $ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    source ~/.nvm/nvm.sh
    nvm install v10.11.0
    npm install
    npm install pm2 -g
    pm2 start ecosystem.config.js
   
    exit
EOF
