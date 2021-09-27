pipeline {
  agent any
  tools {nodejs "latest"}
  stages {
    stage('preflight') {
      steps {
        echo sh(returnStdout: true, script: 'env')
        sh 'node -v'
      }
    }
    stage('build') {
      steps {
        dir('api'){
          sh 'npm --version'
          sh 'npm install'
        }
      }
    }
  }
}