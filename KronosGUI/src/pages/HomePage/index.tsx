import { CardContainer, CardSection, GetStarted, Spacer } from "./styled.module";
import PageEnveloper from "../../components/PageEnveloper";
import Button from "../../components/GetStartedButton"
import InformationCard from "../../components/InformationCard";
import SOE from "/CardMapsImg/SOE-thumb.png";
import DE from "/CardMapsImg/DE-thumb.webp";
import TG from "/CardMapsImg/TG-thumb.jfif";
import ZS from "/CardMapsImg/ZS-thumb.jpg";
import GK from "/CardMapsImg/GK-thumb.jpg"

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
                        <InformationCard id="scrollDown" mapName={"The Giant"} mapImage={TG}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt neque arcu, a tempor felis ullamcorper a. Etiam mattis blandit ipsum at ornare. Sed et libero non diam elementum faucibus. Nunc congue eget sapien sed cursus. Nullam massa est, eleifend at velit a, ullamcorper sodales nisi. Morbi volutpat rhoncus nisi sed semper. Vestibulum diam dui, scelerisque quis elit eget, imperdiet elementum nisl. Maecenas vulputate, nunc a congue condimentum, augue diam convallis felis, ac tempus dui nisl id odio. Etiam in ipsum porta est ultrices iaculis a nec risus.
                        </InformationCard>
                        <InformationCard mapName={"Shadows of Evil"} mapImage={SOE}>
                            Shadows of Evil is the eighteenth (chronologically third) Zombies map. It is the first Zombies map in Black Ops 3. The setting takes place in the fictional city of Morg City, from the 1940s, where it introduces four new characters, Nero Blackstone, Jessica Rose, Jack Vincent and Floyd Campbell as they are transported to a nightmarish realm by the Shadow Man, a supernatural being, leader of the Apothicons.
                        </InformationCard>
                        <InformationCard mapName={"Der Eisendrache"} mapImage={DE}>
                            Der Eisendrache (The Iron Dragon) is the third Zombies map in Black Ops 3. The Primis crew must go to this elusive castle located in the Austrian Alps, in order to retrieve Ultimis Dempsey’s soul. This castle was occupied by members of Group 935 and was dubbed “Griffin Castle” by its members, two most notable members were Dr. Edward Richtofen and Dr. Maxis. The castle was used for rocket testing purposes as well as developing the Wunder Sphere and even creating a Death Ray.
                        </InformationCard>
                        <InformationCard mapName={"Zetsubou no Shima"} mapImage={ZS}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt neque arcu, a tempor felis ullamcorper a. Etiam mattis blandit ipsum at ornare. Sed et libero non diam elementum faucibus. Nunc congue eget sapien sed cursus. Nullam massa est, eleifend at velit a, ullamcorper sodales nisi. Morbi volutpat rhoncus nisi sed semper. Vestibulum diam dui, scelerisque quis elit eget, imperdiet elementum nisl. Maecenas vulputate, nunc a congue condimentum, augue diam convallis felis, ac tempus dui nisl id odio. Etiam in ipsum porta est ultrices iaculis a nec risus.
                        </InformationCard>
                        <InformationCard mapName={"Gorod Krovi"} mapImage={GK}>
                            Gorod Krovi (City of Blood) is the fifth Zombies map in Black Ops 3. The four travel to a war-torn Stalingrad, in another alternate universe, during a massive battle between several Group 935 controlled Dragons and Russian Giant Robots in search for this universe's Nikolai Belinski.
                        </InformationCard>
                    </CardContainer>
                </CardSection>
            </div>
        </PageEnveloper>
    )
}

export default HomePage;