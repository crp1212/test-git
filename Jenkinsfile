pipeline {
    agent {
        docker {
          // image 'mcr.microsoft.com/powershell'
          image 'node:14.5.0-slim'
          args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                // sh 'npm install'
                // sh "chmod +x -R ${env.WORKSPACE}" // 获取权限
                // sh './jenkins/scripts/robot.sh'
                // sh 'node robo.js'
                 sh './jenkins/scripts/test.sh'
                 sh 'node test11.js'
            }
        }
    }
}
