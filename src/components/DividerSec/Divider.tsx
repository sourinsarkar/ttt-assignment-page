import Data from "../../data/Data.json"

const Divider: React.FC = () => {
    return (
        <div className="mt-10 mb-5">
            <div className="flex items-center font-semibold xl:text-xl xsm:text-base">
                <div className="xl:px-10 xsm:px-5 flex justify-center items-center border-t-2 border-r-2 border-black/5 p-3 text-[#3694df]">{Data.profile.post} Posts</div>
                <div className="w-[60%] text-white border-b-2 border-black/5 p-3">I</div>
            </div>
        </div>
    );
}

export default Divider