import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div<{ isHome: boolean }>`
    width: 100%;
    height: 8vh;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    position: ${(props) => (props.isHome ? 'fixed' : 'relative')};
    background-color: ${(props) => (props.isHome ? 'transparent' : '#1e293b')};
    backdrop-filter: ${(props) => (props.isHome ? 'blur(10px)' : 'none')};
    z-index: ${(props) => (props.isHome ? 2 : 'auto')};
    box-shadow: ${(props) => (props.isHome ? 'none' : '0 4px 10px rgba(107, 114, 128, 0.9)')};
`;

export const LogoWrapper = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;

    img {
        border-radius: 50%;
    }

    @media (max-width: 700px) {
        width: 15%;
    }
`;

export const NavbarContent = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        width: 80%;
    }
`;

export const NavbarTitle = styled.div`
    color: white;
`;

export const DropdownContainer = styled.div`
    position: relative;
    width: 160px;
    z-index: 2;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
    padding: 10px;
    background-color: #929CD8;
    border-radius: ${({ isOpen }) => (isOpen ? '15px 15px 0 0' : '15px')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #F0F0F0;
    cursor: pointer;

    &:active {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const DropdownList = styled.ul`
    position: absolute;
    width: 100%;
    color: #F0F0F0;
    list-style: none;
    background-color: #929CD8;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #8287C1;
    }
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    gap: 3rem;
    align-items: center;

    @media (max-width: 700px) {
        gap: 2rem;
    }

    @media (max-width: 570px) {
        gap: 1rem;
    }
`;

export const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover {
        color: #0284c7;
    }
`;