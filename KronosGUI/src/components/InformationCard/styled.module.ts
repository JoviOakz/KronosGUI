import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 92vh;
    border-radius: 1.5rem;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 1);

    @media (max-width: 884px) {
        width: 80%;
        height: 96vh;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 1.25rem;
        border-top-right-radius: 1.25rem;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`;

export const Title = styled.p`
    font-family: serif;
    font-size: 2rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
`;

export const Description = styled.p`
    display: flex;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    text-align: justify;
`;