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
```

If it is the first time you start the server or if you deleted the previous from pm2

`pm2 start yarn --name green-views -- start`

else use `pm2 restart green-views`

## Update the ssl certificate

-   Go to the [ZeroSSL](https://manage.sslforfree.com/dashboard) website and log in
-   Request a new certificate and follow the steps. The `http://www.greenviews.be/.well-known/pki-validation/*` route is
    already accessible.
-   The directory to put the certificates in is `/etc/ssl/green-views` on the green views server
