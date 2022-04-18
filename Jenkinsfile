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
                  sh "./script/test"
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

