import type { NextPage } from 'next';
import Header from '../components/Header';
import Services from '../components/Services';
import Welcome from '../components/Welcome';

const Home: NextPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Welcome />
            <Services />
        </div>
    );
};

export default Home;
