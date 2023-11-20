import Data from "../../data/Data.json"

const Divider: React.FC = () => {
    return (
        <div className="mt-10 mb-5">
            <div className="flex items-center">
                <div className="px-10 flex justify-center items-center border-t-2 border-r-2 border-black/5 p-3 font-semibold text-xl text-[#3694df]">{Data.profile.post} Posts</div>
                <div className="w-[70%] text-white border-b-2 border-black/5 font-semibold text-lg p-3">I</div>
            </div>
        </div>
    );
}

export default Divider