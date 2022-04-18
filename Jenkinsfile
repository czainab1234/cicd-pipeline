pipeline {
  agent any
    
  tools {nodejs "node"}
    

    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                chmod 777 ./node_modules/.bin/mocha
                chmod 777 ./script/test
                 sh './script/test'
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

