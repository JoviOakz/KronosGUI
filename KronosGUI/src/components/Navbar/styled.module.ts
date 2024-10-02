import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div<{ isHome: boolean }>`
    width: 100%;
    height: 8vh;
    padding: 0.5rem;
    display: flex;
    position: ${(props) => (props.isHome ? 'fixed' : 'relative')};
    background-color: ${(props) => (props.isHome ? 'transparent' : '#1e293b')};
    backdrop-filter: ${(props) => (props.isHome ? 'blur(10px)' : 'none')};
    z-index: ${(props) => (props.isHome ? 2 : 'auto')};
    box-shadow: ${(props) => (props.isHome ? 'none' : '0 4px 10px rgba(107, 114, 128, 0.4)')};
`;

export const LogoWrapper = styled.div`
    width: 8.33%;
    display: flex;
    justify-content: center;

    img {
    border-radius: 50%;
    }
`;

export const NavbarContent = styled.div`
    width: 83.33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarTitle = styled.div`
    color: white;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    gap: 3rem;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover {
    color: #0284c7;
    }
`;