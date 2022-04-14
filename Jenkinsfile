pipeline {
  agent any
    
  tools {nodejs "node"}
    

    stages {
        stage('Build') {
            steps {
                echo 'building'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('ExecuteSonarQubeReport') {
         steps {
             script{
                sh 'npm i'
                sh 'chmod 777 ./script/sonar.sh'
                
    }
      
        }
        }
    }  
   }

