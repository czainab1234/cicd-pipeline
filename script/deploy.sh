#!/bin/sh

ssh -tt ubuntu@13.234.115.140<<EOF
    cd ~/cicd-pipeline
    git pull origin Master
    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install v10.11.0
    npm install
    npm install pm2 -g
    pm2 start ecosystem.config.js
    pm2 restart ecosystem.config.js
    pm2 stop ecosystem.config.js
    node index.js
   
    exit
EOF
