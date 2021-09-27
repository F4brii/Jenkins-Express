pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'cd api'
                sh 'npm i'
                sh 'npm run dev'
            }
        }
    }
}