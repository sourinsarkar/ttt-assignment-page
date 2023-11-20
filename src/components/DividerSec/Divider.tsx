import Data from "../../data/Data.json"

const Divider: React.FC = () => {
    return (
        <div className="flex items-center">
            <div className="bg-slate-400 w-[30%] flex justify-center items-center">{Data.profile.post}</div>
            <div className="bg-pink-400 w-[70%]"></div>
        </div>
    );
}

export default Divider