import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import Logo from "/Logo.jfif";
import 'react-dropdown/style.css';

const Navbar = ({ mapName, isHome = true }) => {
    const navigate = useNavigate();
    const options = [
        { value: 'shadows-of-evil', label: 'Shadows of Evil' },
        { value: 'der-eisendrache', label: 'Der Eisendrache' },
        { value: 'the-giant', label: 'The Giant' },
        { value: 'zetsubou-no-shima', label: 'Zetsubou no Shima' },
        { value: 'gorod-krovi', label: 'Gorod Krovi' }
    ];
    const defaultOption = 'Choose a Map';

    const handleDropdownChange = (option) => {
        navigate(`/${option.value}`);
    };

    return (
        <div className={`navbar w-full h-[8vh] p-2 ${isHome ? "flex fixed bg-transparent backdrop-blur-sm z-[2]" : "bg-slate-800 flex shadow-md shadow-gray-400"}`}>
            <div className="flex justify-center w-1/12">
                <img className="rounded-full" src={Logo} />
            </div>

            <div className="flex justify-between items-center w-10/12">
                <div className="text-white">{mapName}</div>
                <div>
                    <ul className="flex gap-12 items-center">
                        <Link className="text-white hover:text-sky-700" to="/">Home</Link>
                        <Dropdown options={options} onChange={handleDropdownChange} value={defaultOption} />
                        <Link className="text-white hover:text-sky-700" to="/">About</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;