const { Server } = require("socket.io");

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected REALgwbtyhbw');
    socket.on('disconnect', () => {
        console.log('FUCK user disconnected');
    });

    socket.on('funnybutton', (isReal) => {
        io.emit('funnybutton', isReal);
    });

    socket.on('funnybutton2', (isReal) => {
        io.emit('funnybutton2', isReal);
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});