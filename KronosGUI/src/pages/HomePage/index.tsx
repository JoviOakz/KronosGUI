import { CardContainer, CardSection, GetStarted, Spacer } from "./styled.module";
import PageEnveloper from "../../components/PageEnveloper";
import Button from "../../components/GetStartedButton"
import InformationCard from "../../components/InformationCard";
import SOE from "/CardMapsImg/SOE-thumb.png";
import DE from "/CardMapsImg/DE-thumb.webp";
import TG from "/CardMapsImg/TG-thumb.jfif";
import ZS from "/CardMapsImg/ZS-thumb.jpg";
import GK from "/CardMapsImg/GK-thumb.jpg";
import RE from "/CardMapsImg/RE-thumb.jpg";

const HomePage = () => {
    return (
        <PageEnveloper mapName="KronosGUI" isHome={true}>
            <div>
                <GetStarted>
                    <a href="#scrollDown">
                        <Button>Get started</Button>
                    </a>
                </GetStarted>

                <Spacer />

                <CardSection>
                    <CardContainer>
                        <InformationCard id="scrollDown" mapName={"Shadows of Evil"} mapImage={SOE}>
                            Shadows of Evil is set in a noir city from the 1940s, four strangers - a boxer, a femme fatale, a detective, and a magician - are brought into a parallel dimension. They are trapped in a dark nightmare and must face hordes of zombies while being manipulated by a mysterious entity. Each character harbors a dark past and must fight for redemption, uncovering secrets and completing rituals to escape the cursed city.
                        </InformationCard>
                        <InformationCard mapName={"The Giant"} mapImage={TG}>
                            In The Giant, the iconic heroes Richtofen, Dempsey, Takeo, and Nikolai return to the Nazi weapons factory, the site of the zombie threat. Set at the end of World War II, the map follows a time-traveling storyline where the protagonists must fight to survive against endless waves of the undead while uncovering the dark secrets hidden within the ruins of the complex. With powerful weapons and hidden challenges, The Giant challenges players to survive and alter the course of history.
                        </InformationCard>
                        <InformationCard mapName={"Der Eisendrache"} mapImage={DE}>
                            Der Eisendrache is set in an Austrian castle during World War II, the heroes Richtofen, Dempsey, Takeo, and Nikolai are sent to disrupt the dark experiments of a Nazi facility. The castle is filled with ancient secrets, such as powerful elemental bows and mysterious mechanisms. As they face hordes of the undead and monstrous creatures, the protagonists must uncover the facility’s dark purpose and prevent the destruction of the world.
                        </InformationCard>
                        <InformationCard mapName={"Zetsubou no Shima"} mapImage={ZS}>
                            Zetsubou no Shima is set on a remote Pacific island during World War II, the heroes Richtofen, Dempsey, Takeo, and Nikolai face the horrors of genetic experiments conducted by a secret group, Division 9, which resulted in monstrous mutations and hordes of zombies. Amid dense jungles, abandoned laboratories, and biological dangers, the protagonists must fight for survival while uncovering dark secrets and trying to prevent a global catastrophe.
                        </InformationCard>
                        <InformationCard mapName={"Gorod Krovi"} mapImage={GK}>
                            Gorod Krovi is set in a devastated city in Russia during an alternate war, the heroes Richtofen, Dempsey, Takeo, and Nikolai are transported to this nightmarish scenario, where they face not only hordes of zombies but also mechanical dragons and mutated soldiers. As they explore the ruined city, the protagonists must uncover the secrets of Division 9 and confront the horrors of their own pasts, fighting to escape this world of destruction and chaos.
                        </InformationCard>
                        <InformationCard mapName={"Revelations"} mapImage={RE}>
                            Revelations is set in a distorted and surreal world, the four protagonists – Richtofen, Dempsey, Takeo, and Nikolai – find themselves in an environment that combines elements from several previous maps in the series. In this setting, they must face hordes of zombies and multifaceted challenges while trying to uncover the mysteries of the saga's history, including the origin of the zombies and the secrets of their own journeys.
                        </InformationCard>
                    </CardContainer>
                </CardSection>
            </div>
        </PageEnveloper>
    )
}

export default HomePage;