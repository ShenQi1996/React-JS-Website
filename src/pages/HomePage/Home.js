import React from 'react';

import {InfoSection, Pricing} from "../../components";
import {HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <InfoSection {...HomeObjThree} />
            <Pricing />
            <InfoSection {...HomeObjFour} />
        </>
    )
};

export default Home;
