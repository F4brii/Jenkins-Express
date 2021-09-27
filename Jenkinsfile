pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'npm i'
            }
        }
        stage('run') { 
            steps {
                sh 'npm run dev'
            }
        }
    }
}