import { useNavigate } from "react-router-dom";
import Dropdown, { Option } from 'react-dropdown';
import Logo from "/Logo.jfif";
import 'react-dropdown/style.css';
import { LogoWrapper, NavbarContainer, NavbarContent, NavbarLink, NavbarLinks, NavbarTitle } from "./styled.module";

interface INavbar {
    mapName: string;
    isHome: boolean;
}

const Navbar: React.FC<INavbar> = ({ mapName, isHome }) => {
    const navigate = useNavigate();
    const options: Option[] = [
        { value: 'shadows-of-evil', label: 'Shadows of Evil' },
        { value: 'der-eisendrache', label: 'Der Eisendrache' },
        { value: 'the-giant', label: 'The Giant' },
        { value: 'zetsubou-no-shima', label: 'Zetsubou no Shima' },
        { value: 'gorod-krovi', label: 'Gorod Krovi' }
    ];
    const defaultOption = 'Choose a Map';

    const handleDropdownChange = (option: Option) => {
        navigate(`/${option.value}`);
    };

    return (
        <NavbarContainer isHome={isHome}>
            <LogoWrapper>
                <img src={Logo} />
            </LogoWrapper>

            <NavbarContent>
                <NavbarTitle>{mapName}</NavbarTitle>
                <div>
                    <NavbarLinks>
                        <NavbarLink to="/">Home</NavbarLink>
                        <Dropdown options={options} onChange={handleDropdownChange} value={defaultOption} />
                        <NavbarLink to="/">About</NavbarLink>
                    </NavbarLinks>
                </div>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;