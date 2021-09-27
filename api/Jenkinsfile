pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'npm i'
                sh 'npm run dev'
            }
        }
    }
}