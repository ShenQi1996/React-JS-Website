import React from 'react';

import {InfoSection, Pricing} from "../../components";
import {HomeObjFour, HomeObjThree, HomeObjTwo} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjTwo} />
            <InfoSection {...HomeObjThree} />
            <Pricing />
            <InfoSection {...HomeObjFour} />
        </>
    )
};

export default Home;
