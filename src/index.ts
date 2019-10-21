import WebSocket from 'ws';

const messages = [
    'First Message'
];

const wss = new WebSocket.Server({
    port: 8080
});

wss.on('connection', ws => {
    ws.on('message', data => {
        console.log('message pushed');
        messages.push(data);
        ws.send(JSON.stringify([data]));
    });
    ws.send(JSON.stringify(messages));
});

