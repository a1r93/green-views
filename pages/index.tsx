import type { NextPage } from 'next';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

const Home: NextPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Welcome />
        </div>
    );
};

export default Home;
