import React from 'react';
import AnotherSection from './AnotherSection/AnotherSection';
import Banner from './Banner/Banner';
import ExtraSession from './ExtraSession/ExtraSession';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <ExtraSession></ExtraSession>
            </div>
            <div>
                <AnotherSection></AnotherSection>
            </div>
        </div>
    );
};

export default Home;