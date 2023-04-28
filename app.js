const exec = require('child_process').exec

function childProcessHandle (options) {
  let { cwd, command } = options
  return new Promise((resolve, reject) => {
      let childProcess = exec(command, {cwd})
      let message = ''
      childProcess.stdout.on('data', function (data) {
          console.log(data)
          message += data
      })
      childProcess.stderr.on('data', function (data) {
          console.log(data)
          message += data
      })
      childProcess.on('close', () => {
          resolve(message)
      })
  })
}

async function autoPlay() {
  const commands = [
    { command: 'git add .' }, 
    { command: `git commit -m"更新JenkinsFile${Date.now()}"` }, 
    { command: 'git push' }
  ]
  for (let i = 0; i < commands.length; i++) {
    await childProcessHandle(commands[i])
  }
  console.log('执行完成')
}

autoPlay()