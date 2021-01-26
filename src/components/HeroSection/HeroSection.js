import React,{useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroSection.elements';
import Video from '../../videos/video.mp4';
import {Button} from '../';

const HeroSection = () => {
    const [hover,setHover]=useState(false);

    const onHover=()=>setHover(!hover);

    return ( 
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        Lorem ipsum dolor sit amet 
                    </HeroH1>
                    <HeroP>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='/signup'
                             onMouseEnter={onHover} onMouseLeave={onHover} primary dark
                        >
                            Get started {hover?<ArrowForward/>:<ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
     );
}
 
export default HeroSection;