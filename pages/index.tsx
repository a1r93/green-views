import type { NextPage } from 'next';
import {
    Body1, Body2, Body3, Body4, Heading1, Heading2, Heading3, Heading4
} from '../components/typography';

const Home: NextPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Heading1>Hello world</Heading1>
            <Heading2>Hello world</Heading2>
            <Heading3>Hello world</Heading3>
            <Heading4>Hello world</Heading4>
            <Body1>Hello world</Body1>
            <Body2>Hello world</Body2>
            <Body3>Hello world</Body3>
            <Body4>Hello world</Body4>
        </div>
    );
};

export default Home;
