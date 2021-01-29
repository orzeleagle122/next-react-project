import React,{useState} from 'react';
import {Sidebar,Navbar,HeroSection, InfoSection, Services,Footer} from '../components/';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return ( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
     );
}
 
export default Home;