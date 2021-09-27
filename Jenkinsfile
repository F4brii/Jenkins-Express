pipeline {
  agent any
  triggers{
    cron('H/2 * * * *')
  }
  stages {
    stage('build') {
      steps {
        dir('api'){
            sh 'docker-compose build'
        }
      }
    }
    stage('test') {
      steps {
        dir('api'){
            sh 'docker-compose run --rm web npm run test'
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