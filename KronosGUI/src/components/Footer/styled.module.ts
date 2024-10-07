import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 32vh;
    background-color: #01091C;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.9);
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
`;

export const Line = styled.div`
    width: 22%;
    height: 2px;
    background-color: rgba(108, 117, 125, 0.4);
`;

export const SocialLinks = styled.ul`
    display: flex;
    gap: 2rem;
`;

export const ImageLink = styled.a`
    img {
        width: 44px;
    }
`;

export const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #01091C;
`;

export const LogoImage = styled.img`
    width: 96px;
    border-radius: 0.5rem;
`;

export const FooterText = styled.p`
    color: #E2E8F0;
`;

export const NavLinks = styled.ul`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`;

export const NavLink = styled.a`
    color: #E2E8F0;
    &:hover {
        color: #0EA5E9;
    }
`;

export const Separator = styled.div`
    width: 2px;
    height: 16px;
    background-color: rgba(108, 117, 125, 0.6);
`;