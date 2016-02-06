#!/usr/bin/env node
'use strict';
const app = require('commander');
const WebSocket = require('ws');

app.version('0.0.1')
    .usage('[options] message')
    .description('Sent data over Ws.')
    .option('-H, --host <string>', 'WebSocket server host address')
    .parse(process.argv);

if (!app.args.length || !app.host) app.help();
else {
    let ws = new WebSocket(app.host);
    function error(err) {
        console.log(err ? err : 'Successfully sent');
        ws.close();
    }

    ws.on('open', () => {
        ws.send(app.args.join(' '), error);
    });
    ws.on('error', error);
}