import { CardContainer, ContentWrapper, Description, ImageWrapper, Title, TitleWrapper } from "./styled.module";
import { Link } from "react-router-dom";
import Button from "../Button";

interface IInformationCard {
    id?: string;
    children: string;
    mapName: string;
    mapImage: string;
}

const InformationCard: React.FC<IInformationCard> = ({ children, mapName, mapImage, ...props }) => {
    return (
        <CardContainer {...props}>
            <ImageWrapper>
                <img src={mapImage} />
            </ImageWrapper>

            <TitleWrapper>
                <Title>{mapName}</Title>
            </TitleWrapper>

            <ContentWrapper>
                <Description>{children}</Description>
                <Link preventScrollReset={false} to={"/" + mapName.toLowerCase().replace(/ /g, '-')}><Button>Enter</Button></Link>
            </ContentWrapper>
        </CardContainer>
    )
}

export default InformationCard;