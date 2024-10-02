import PageEnveloper from "../../components/PageEnveloper";
import Marquee from "react-fast-marquee";
import Logo from "/Logo.jfif";

const SOE = () => {
    return (
        <PageEnveloper mapName="Shadows of Evil" isHome={false}>
            <div className="min-h-[92vh]">
                <Marquee>
                    <img className="h-[92vh]" src={Logo} />
                </Marquee>
            </div>
        </PageEnveloper>
    )
}

export default SOE;