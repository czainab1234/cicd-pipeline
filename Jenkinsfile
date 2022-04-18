pipeline {
    agent any

      stages {
          stage('build') {
              steps {
              nodejs(nodeJSInstallationName: 'Nodejs') {
                    sh 'npm install'
              
              }
          }
          }
          stage('test') {
              steps {
                  nodejs(nodeJSInstallationName: 'Nodejs') {
                  sh "npm install"
                  "chmod 777 ./node_modules/.bin/mocha"
                  "chmod 777 ./script/test.sh"
                  sh "./script/test.sh"
              }
          }
          }
        stage('Deploy') {
            steps {
                echo "Deploying...."
            }
        }
       stage("sonarqube analysis"){
            steps{
                nodejs(nodeJSInstallationName: 'Nodejs'){
                    sh "npm install"
                    withSonarQubeEnv('Sonar'){
                    sh 'npm install sonar-scanner'
                    sh "npm run sonar"
                    }
                    
                }
            }
        }
    }  
   }

