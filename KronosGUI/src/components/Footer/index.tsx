import { CenterContent, FlexContainer, FooterContainer, FooterText, ImageLink, Line, LogoImage, NavLink, NavLinks, Separator, SocialLinks } from "./styled.module";
import { Link } from "react-router-dom";
import Github from "/GitHub-icon.png";
import Instagram from "/Instagram-icon.png";
import Logo from "/Logo.jfif";

const Footer = () => {
    return (
        <FooterContainer>
            <FlexContainer>
                <Line />
                <SocialLinks>
                    <ImageLink href="https://github.com/JoviOakz" target="_blank"><img src={Github} /></ImageLink>
                    <ImageLink href="https://instagram.com/jovioakz_" target="_blank"><img src={Instagram} /></ImageLink>
                </SocialLinks>
                <Line />
            </FlexContainer>

            <CenterContent>
                <Link to="/"><LogoImage src={Logo} /></Link>
                <FooterText>2024</FooterText>
                <div>
                    <NavLinks>
                        <NavLink href="">Motivation</NavLink>
                        <Separator />
                        <NavLink href="">About Us</NavLink>
                    </NavLinks>
                </div>
            </CenterContent>
        </FooterContainer>
    )
}

export default Footer;