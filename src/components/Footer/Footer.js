import React from 'react';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';


import { Button } from '../../globalStyles';
import {FooterCon, FooterSubs, FooterSubHeading, FooterSubText,
        Form, FormInput, FooterLinksCon, FooterLinksWrapper, 
        FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia,
        SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, 
        SocialIcons, SocialIconLink}
        from "./Footer.elements";

const Footer = () => {
    return (
        <FooterCon>
            <FooterSubs>
                <FooterSubHeading>
                    Join our exclusive membership to 
                    receive the latest news and trands
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="email" typle="email" placeholder="Your Email" /> 
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubs>
            <FooterLinksCon>
                <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Textimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agencys</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Linkedin</FooterLink>
                            <FooterLink to="/">Github</FooterLink>
                        </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksCon>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        SAM
                    </SocialLogo>
                    <WebsiteRights>SAM 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={"https://www.facebook.com/qi.shen.92"} target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href={"https://www.linkedin.com/in/shenqi1993/"} target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href={"https://github.com/ShenQi1996"} target="_blank" aria-label="Github" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterCon>
    );
};

export default Footer;
