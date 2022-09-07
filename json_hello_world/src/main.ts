import express from 'express';

const SERVER_PORT = 3000;
const server = express();

server.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

server.listen(SERVER_PORT, () => {
    return console.log(`Express is listening at http://localhost:${SERVER_PORT}`);
});