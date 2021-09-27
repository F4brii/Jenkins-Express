pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        dir('api'){
            sh 'sudo docker-compose build'
        }
      }
    }
    stage('test') {
      steps {
        dir('api'){
            sh 'sudo docker-compose run --rm web npm run test'
        }
      }
    }
    stage('deploy') {
      steps {
        dir('api'){
            sh 'sudo docker-compose up -d'
        }
      }
    }
  }
}