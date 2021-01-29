import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocalLogo,
    WebsiteRights,
    SocialIcons,
    SocalIconLink
} from './Footer.elements';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return ( 
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    About us
                                </FooterLinkTitle>
                                    <FooterLink to="/signin">
                                        How it works
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Testimonials
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Careers
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Investors
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Terms of Services
                                    </FooterLink>                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    About us
                                </FooterLinkTitle>
                                    <FooterLink to="/signin">
                                        How it works
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Testimonials
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Careers
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Investors
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Terms of Services
                                    </FooterLink>                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    About us
                                </FooterLinkTitle>
                                    <FooterLink to="/signin">
                                        How it works
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Testimonials
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Careers
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Investors
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Terms of Services
                                    </FooterLink>                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    About us
                                </FooterLinkTitle>
                                    <FooterLink to="/signin">
                                        How it works
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Testimonials
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Careers
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Investors
                                    </FooterLink>
                                    <FooterLink to="/signin">
                                        Terms of Services
                                    </FooterLink>                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocalLogo to="/" onClick={toggleHome}>
                                dolla
                            </SocalLogo>
                            <WebsiteRights>
                                dolla (c) {new Date().getFullYear()} All rights reserved
                            </WebsiteRights>
                            <SocialIcons>
                                <SocalIconLink href="/" target="_blank" arial-label="Facebook">
                                    <FaFacebook/>
                                </SocalIconLink>
                                <SocalIconLink href="/" target="_blank" arial-label="Instagram">
                                    <FaInstagram/>
                                </SocalIconLink>
                                <SocalIconLink href="/" target="_blank" arial-label="Twitter">
                                    <FaTwitter/>
                                </SocalIconLink>
                                <SocalIconLink href="/" target="_blank" arial-label="Linkedin">
                                    <FaLinkedin/>
                                </SocalIconLink>
                                <SocalIconLink href="/" target="_blank" arial-label="Youtube">
                                    <FaYoutube/>
                                </SocalIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
     );
}
 
export default Footer;