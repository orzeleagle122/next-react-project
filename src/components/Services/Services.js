import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesWrapper
} from './Services.elements';
import img4 from '../../images/img4.svg';
import img5 from '../../images/img5.svg';
import img6 from '../../images/img6.svg';

const Services = () => {
    return ( 
        <>
            <ServicesContainer id="services">
                <ServicesH1>
                    Our Services
                </ServicesH1>
                <ServicesWrapper>                    
                    <ServicesCard>
                        <ServicesIcon src={img4}/>
                        <ServicesH2>
                            Reduce expenses
                        </ServicesH2>
                        <ServicesP>
                            Ut purus ante, condimentum quis elit nec, aliquet gravida urna.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={img5}/>
                        <ServicesH2>
                            Aliquam turpis
                        </ServicesH2>
                        <ServicesP>
                            Etiam consectetur justo id risus maximus, a auctor sapien facilisis.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={img6}/>
                        <ServicesH2>
                            Proin euismod
                        </ServicesH2>
                        <ServicesP>
                            Donec vitae viverra augue, ac tempus libero. Nulla maximus efficitur bibendum.
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
     );
}
 
export default Services;