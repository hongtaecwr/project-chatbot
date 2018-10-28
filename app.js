const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {4dp6crcQo9M/IA7toR7PP6sJmYLycqIZTiGYK1CZmuPArfcRgiam7/ko321x/q+ay8a4pmhYPqDLJ57eest5mKG9GHllv3Hu3UA7Ij/k8heqnjN29eEUEofB+4mj/BbsqY7uBDGkHBd7UmlxvSlvLwdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}