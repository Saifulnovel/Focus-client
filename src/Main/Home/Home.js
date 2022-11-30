import React from 'react';
import Advertise from '../../DashBoard/MyProducts/Advertise/Advertise';

import useTitle from '../../Hooks/useTitle/useTitle';
import AnotherSection from './AnotherSection/AnotherSection';
import Banner from './Banner/Banner';
import CategoryList from './CategoryList/CategoryList';
import ExtraSession from './ExtraSession/ExtraSession';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div>
                <CategoryList></CategoryList>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
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