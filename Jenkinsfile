pipeline {
    agent any

      stages {
          stage('build') {
              nodejs(nodeJSInstallationName: 'Nodejs') {
                    sh 'npm install'
                  
              }
          }
          stage('test') {
              steps {
                  sh "npm install"
                  
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

