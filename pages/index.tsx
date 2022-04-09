import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Satisfaction from '../components/Satisfaction';
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
            <Satisfaction />
            <Contact />
            <Footer />
        </HomePageContainer>
    );
};

export default Home;
