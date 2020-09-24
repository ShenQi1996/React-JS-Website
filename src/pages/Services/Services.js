import React from 'react';

import {InfoSection, Pricing} from "../../components";
import {HomeObjFour,} from './Data';

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...HomeObjFour} />
        </>
    )
};

export default Home;
