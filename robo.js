const axios = require('axios')

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

sendMsg('构建完成')