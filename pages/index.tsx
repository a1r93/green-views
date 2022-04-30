import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Contact from '../components/organisms/Contact';
import Description from '../components/organisms/Description';
import Footer from '../components/organisms/Footer';
import Gallery from '../components/organisms/Gallery';
import Header from '../components/organisms/Header';
import Services from '../components/organisms/Services';
import Welcome from '../components/organisms/Welcome';
import { HomePageContainer } from '../styles';

const Home: NextPage = () => {
    return (
        <HomePageContainer>
            <Head>
                <title>Green Views</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="google-site-verification" content="yiZ-gHrZDp94_k-3Sk7qpYu5n74N4ft3qOHXlstUYj4" />
            </Head>
            <Header />
            <Welcome />
            <Services />
            <Description />
            <Gallery />
            <Contact />
            <Footer />
        </HomePageContainer>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale)),
    },
});

export default Home;
