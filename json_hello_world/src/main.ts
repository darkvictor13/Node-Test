import express, { Request, Response } from 'express';

const SERVER_PORT = 3000;
const server = express();

server.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});

server.get('/ola/:name', (req: Request, res: Response) => {
    res.json({ message: `Ola ${req.params.name}!` });
});

server.listen(SERVER_PORT, () => {
    return console.log(`Express is listening at http://localhost:${SERVER_PORT}`);
});