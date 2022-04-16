import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Services from '../components/Services';
import Welcome from '../components/Welcome';
import { HomePageContainer } from './style';

const Home: NextPage = () => {
    return (
        <HomePageContainer>
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

export default Home;
