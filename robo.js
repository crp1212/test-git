const axios = require('axios')
const { Command } = require('commander');
const program = new Command();
program.option('-f, --fail','编译失败').option('-s, --success', '编译完成');

function sendMsg (content) {
  axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=4848de26-980a-4c3e-8d89-1d8d2e8897b2', {
  "msgtype": "text",
  "text": {
    content
  }
}, {
  headers: {
    'Content-Type': 'application/json'
  }
}).then(e => console.log('data', e.data)).catch(e => console.log('error', e))
}

program.parse(process.argv)
const opts = program.opts()
if (opts.fail) {
  sendMsg('构建失败')
} else if (opts.success) {
  sendMsg('构建成功')
}