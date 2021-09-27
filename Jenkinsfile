pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          dir('api'){
            sh 'npm --version'
            sh 'npm install'
          }
        }
      }
    }
    stage('deploy') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          dir('api'){
            sh 'npm run dev'
          }
        }
      }
    }
  }
}