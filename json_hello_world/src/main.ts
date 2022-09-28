import express, { Request, Response } from 'express';

const SERVER_PORT = 3000;
const server = express();

type GithubUser = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: boolean
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}

server.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
});

server.get('/ola/:name', (req: Request, res: Response) => {
    res.json({ message: `Ola ${req.params.name}!` });
});

// Crie um end point que retorne as informações do usuário no github
// as informações devem ser retornadas no formato json do tipo GithubUser
// o end point deve ser /github/:username
// a url para fazer a requisição é https://api.github.com/users/:username
server.get('/github/:username', (req: Request, res: Response) => {
    fetch(`https://api.github.com/users/${req.params.username}`)
        .then(response => response.json())
        .then(json => res.json(json));
});

server.listen(SERVER_PORT, () => {
    return console.log(`Express is listening at http://localhost:${SERVER_PORT}`);
});