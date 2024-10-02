import styled from "styled-components";
import Background from "/Home-bg.png";

export const GetStarted = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 113vh;
    background-size: cover;
    background-image: url(${Background});
`;

export const Spacer = styled.div`
    height: 30vh;
    background-color: #091036;
`;

export const CardSection = styled.div`
    background: linear-gradient(to bottom, #091036 5%, #384070 50%, #384070);
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
    padding: 2rem;
`;