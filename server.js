const express = require('express');
const app = express();
const push = require('web-push');

app.listen(3000, function() {
    console.log('listening on 3000')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/subscribe', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/push', (req, res) => {
    let msg = req.body.message;
    

    var vapIdKeys = {
        publicKey:
            'BLSmud58LjBWTpQ-YXtzUGWOfHy8qfzYv-aFIYXPcAYnpLbNuaDsSu5R6Tk3JAXpGaGyn9ZWGptIoSnCjaGv7Lc',
        privateKey: 'PZPfiSH0bJB1Z_atxa3in6MJ2Pn1M-8Mjeg8WPJPzfs'
    };

    push.setVapidDetails('mailto:kotee@gmail.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

    let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABio396bg1awebesgluhfMY8CjV9DUw5B5XOolcXPYt_m44eyhJdeWp9w4-ajlyvxblUkJLilGrYaFJBcGWYkJGJQ-3RpMsfO7Enyg6SIeGaCYhNw7O76b_YBx6s3XtBu8ptFZlr6oBsyChGS1Cas2Wdj0XthIxW0a_c9_CQ_IvC5dDoVc","expirationTime":null,"keys":{"auth":"a_wFG1gONgqRXxTHcjbftg","p256dh":"BHwyeiKvcDMaBnjecUxTXWQWCUpyqXlhAvA1EVOrfscajAf1TXvbfycYW_m6i4v-xSOdTRKW-w8UNlZkgdunyg8"}};
    push.sendNotification(sub, msg);
    res.send('Successfully Pushed');

});