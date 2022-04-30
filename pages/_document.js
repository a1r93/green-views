import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Green Views, Société d'entreprenariat de jardin</title>
                <meta
                    name="description"
                    content="Une équipe spécialisée à votre service pour : Une tonte hebdomadaire ou bimensuelle, l'entretien de parterres, le soufflage des feuilles, la taille des haies et arbustes, des créations digne des plus grands, et bien d'autres choses !"
                />
                <meta name="keywords" content="Jardin, Jardinage, Terrasse, Tonte, Brabant Wallon, Bruxelles" />
                <meta name="author" content="Arnaud Rochez" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="google-site-verification" content="yiZ-gHrZDp94_k-3Sk7qpYu5n74N4ft3qOHXlstUYj4" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
