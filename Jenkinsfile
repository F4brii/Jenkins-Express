pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        dir('api'){
            sh 'docker-compose build'
        }
      }
    }
    stage('deploy') {
      steps {
        dir('api'){
            sh 'docker-compose up -d'
        }
      }
    }
  }
}