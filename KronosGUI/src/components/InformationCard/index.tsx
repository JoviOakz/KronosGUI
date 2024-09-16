import { Link } from "react-router-dom";
import Button from "./Button/Button";

const InformationCard = ({ children, mapName, mapImage, ...props }) => {
    return (
        <div {...props} className="flex flex-col w-[45%] h-[92vh] rounded-3xl bg-white shadow-lg shadow-slate-900">
            <div>
                <img className="rounded-t-[20px]" src={mapImage} />
            </div>

            <div className="flex justify-center p-4">
                <p className="font-serif text-[32px]">{mapName}</p>
            </div>

            <div className="flex flex-col h-full justify-between items-center pb-8">
                <p className="flex pl-10 pr-10 text-justify">{children}</p>
                <Link preventScrollReset={false} to={"/" + mapName.toLowerCase().replaceAll(' ', '-')}><Button>Enter</Button></Link>
            </div>
        </div>
    )
}

export default InformationCard;