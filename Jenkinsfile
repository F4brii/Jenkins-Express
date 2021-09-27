pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        dir('api'){
            sh 'docker-compose build'
            sh 'docker-compose up -d'
        }
      }
    }
  }
}