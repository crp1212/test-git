#!/usr/bin/env sh

curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=4848de26-980a-4c3e-8d89-1d8d2e8897b2' \
   -H 'Content-Type: application/json' \
   -d '
   {
    	"msgtype": "text",
    	"text": {
        	"content": "hello world11"
    	}
   }'