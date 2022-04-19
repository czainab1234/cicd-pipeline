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
                  sh "chmod 777 ./node_modules/.bin/mocha"
                  sh "chmod 777 ./script/test.sh"
                  sh "./script/test.sh"
              }
          }
          }
        stage('Deploy') {
            steps {
                nodejs(nodeJSInstallationName: 'Nodejs') {
                  sh "npm install"
                  sh "chmod 777 ./script/deploy.sh"
                  sh "./script/deploy.sh"
                
            }
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

