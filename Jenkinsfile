pipeline {
    agent any

      stages {
          stage('build') {
              steps {
                  echo 'building the software'
                  
              }
          }
          stage('test') {
              steps {
                  echo 'testing the software'
                  
              }
          }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
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

