import '@/styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Výčetka by Max Juškevič</title>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="Výčetka by Max Juškevič"/>
                <meta property="og:image" content="/GraphicFeature.png"/>
                <meta property="og:url" content="URL of your website"/>
                <meta property="og:site_name" content="Výčetka by Max Juškevič"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
