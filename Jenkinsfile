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

