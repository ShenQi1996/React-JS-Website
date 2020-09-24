import React from 'react';

import {InfoSection} from "../../components";
import { HomeObjThree } from '../HomePage/Data';

const Home = () => {
    return (
        <>
            <InfoSection {...HomeObjThree} />
        </>
    )
};

export default Home;
