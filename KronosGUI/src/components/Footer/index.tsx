import { Link } from "react-router-dom";
import Github from "/GitHub-icon.png";
import Instagram from "/Instagram-icon.png";
import Logo from "/Logo.jfif";

const Footer = () => {
    return (
        <div className="flex flex-col justify-evenly footer w-full h-[32vh] bg-[#01091C] shadow-[0_-4px_6px_-1px,0_-2px_4px_-2px] shadow-slate-800">
            <div className="flex justify-center flex-wrap gap-16 items-center">
                <div className="w-80 h-[2px] bg-slate-200 opacity-40" />
                <ul className="flex gap-8">
                    <a href="https://github.com/JoviOakz" target="_blank"><img src={Github} /></a>
                    <a href="https://instagram.com/jovioakz_" target="_blank"><img src={Instagram} /></a>
                </ul>
                <div className="w-80 h-[2px] bg-slate-200 opacity-40" />
            </div>

            <div className="flex flex-col justify-center items-center bg-[#01091C]">
                <Link to="/"><img className="w-24 rounded-lg" src={Logo} /></Link>
                <p className="text-slate-200">2024</p>
                <div>
                    <ul className="flex gap-3 items-center">
                        <a className="text-slate-200 hover:text-sky-700" href="">Motivation</a>
                        <div className="w-[2px] h-4 bg-slate-200 opacity-60" />
                        <a className="text-slate-200 hover:text-sky-700" href="">About Us</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;