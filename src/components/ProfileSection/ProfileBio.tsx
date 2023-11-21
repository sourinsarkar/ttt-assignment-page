import importedData from "../../data/Data.json";
import ProfileBioIcons from "./ProfileBioIcons";

type ProfileBioType = {
    about: string;
    link: string;
    star: string;
    like: string;
    view: string;
    favourite: string;
};

const Data = {
    bio: importedData.bio as ProfileBioType,
};

const ProfileBio: React.FC = () => {
    return (
        <div>
            <div className="xl:text-xl xsm:text-base py-1"><h2>{Data.bio.about}</h2></div>
            <div className="xl:text-base xsm:text-sm text-[#5cb8c3]"><a href={Data.bio.link}>{Data.bio.link}</a></div>
            <div className="flex gap-5 py-3">

                {/* Worst way ----- */}
                {/* <div className="bg-[#5cb8c3]">
                    <ProfileBioIcons iconName="Star" value={Data.bio.star}/>
                    </div>
                    <div className="bg-[#fec03f]">
                    <ProfileBioIcons iconName="ThumbsUp" value={Data.bio.like}/>
                    </div>
                    <div className="bg-[#848484]">
                    <ProfileBioIcons iconName="Eye" value={Data.bio.view}/>
                    </div>
                    <div className="bg-[#c22659]">
                    <ProfileBioIcons iconName="Heart" value={Data.bio.favourite}/>
                </div> */}

                {/* Best way ----- */}
                <ProfileBioIcons iconName="Star" value={Data.bio.star} color="bg-[#5cb8c3]"/>
                <ProfileBioIcons iconName="ThumbsUp" value={Data.bio.like} color="bg-[#fec03f]"/>
                <ProfileBioIcons iconName="Eye" value={Data.bio.view} color="bg-[#848484]"/>
                <ProfileBioIcons iconName="Heart" value={Data.bio.favourite} color="bg-[#c22659]"/>
            </div>
        </div>
    );
}

export default ProfileBio