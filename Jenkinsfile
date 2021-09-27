pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                dir('api'){
                  sh 'npm install'
                }
            }
        }
    }
}