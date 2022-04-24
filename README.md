# Green Views

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy

First connect to the green views server, then run the following commands

```bash
git pull
yarn
yarn build
pm2 start yarn --name green-views -- start --port 80
```
