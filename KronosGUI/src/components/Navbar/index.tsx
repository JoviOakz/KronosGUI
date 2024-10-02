import { LogoWrapper, NavbarContainer, NavbarContent, NavbarLink, NavbarLinks, NavbarTitle, DropdownContainer, DropdownHeader, DropdownList, DropdownItem, Arrow } from "./styled.module";
import { useNavigate } from "react-router-dom";
import Logo from "/Logo.jfif";
import 'react-dropdown/style.css';
import { useState } from "react";

interface INavbar {
    mapName: string;
    isHome: boolean;
}

const Navbar: React.FC<INavbar> = ({ mapName, isHome }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMap, setSelectedMap] = useState<string | null>(null);

    const options = [
        { value: 'shadows-of-evil', label: 'Shadows of Evil' },
        { value: 'the-giant', label: 'The Giant' },
        { value: 'der-eisendrache', label: 'Der Eisendrache' },
        { value: 'zetsubou-no-shima', label: 'Zetsubou no Shima' },
        { value: 'gorod-krovi', label: 'Gorod Krovi' }
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: { value: string, label: string }) => {
        setSelectedMap(option.label);
        navigate(`/${option.value}`);
        setIsOpen(false);
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
                        <DropdownContainer>
                            <DropdownHeader onClick={toggleDropdown}>
                                {selectedMap || "Choose a Map"}
                                <Arrow isOpen={isOpen}>▼</Arrow>
                            </DropdownHeader>
                            {isOpen && (
                                <DropdownList>
                                    {options.map((option) => (
                                        <DropdownItem key={option.value} onClick={() => handleSelect(option)}>
                                            {option.label}
                                        </DropdownItem>
                                    ))}
                                </DropdownList>
                            )}
                        </DropdownContainer>
                        <NavbarLink to="/">About</NavbarLink>
                    </NavbarLinks>
                </div>
            </NavbarContent>
        </NavbarContainer>
    );
};

export default Navbar;
