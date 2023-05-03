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
                sh "chmod +x -R ${env.WORKSPACE}" // 获取权限
                // sh './jenkins/scripts/robot.sh'
                // sh 'node robo.js'
                 //sh './jenkins/scripts/test.sh'
                 // sh 'node test11.js'
                 // 脚本执行
                 script{
                    def code = sh (
                        script: "./jenkins/scripts/test.sh",
                        returnStatus: true  // 注意得加上这个， 不然 sh 执行 不返回 状态 ,jenkins 执行到这里 如果 grep 还是 找不到 东西的话 又会报 Error : script returned exit code 1 的错
                    )
                    // code为0代表执行成功
                    if (code==0){
                        echo  "继续执行"
                        sh ("node test11.js")
                    }else{
                        sh ("node robo.js")
                    }
                }
            }
        }
    }
}
