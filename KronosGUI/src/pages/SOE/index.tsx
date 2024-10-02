import { StyledImage } from "./styled.module";
import PageEnveloper from "../../components/PageEnveloper";
import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOE = () => {
    return (
        <PageEnveloper mapName="Shadows of Evil" isHome={false}>
            <Marquee>
                <StyledImage src={Logo} />
            </Marquee>
        </PageEnveloper>
    )
}

export default SOE;