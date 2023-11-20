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
            <div><h2>{Data.bio.about}</h2></div>
            <div><a href={Data.bio.link}>{Data.bio.link}</a></div>
            <div>
                <ProfileBioIcons iconName="Star" value={Data.bio.star}/>
                <ProfileBioIcons iconName="ThumbsUp" value={Data.bio.like}/>
                <ProfileBioIcons iconName="Eye" value={Data.bio.view}/>
                <ProfileBioIcons iconName="Heart" value={Data.bio.favourite}/>
            </div>
        </div>
    );
}

export default ProfileBio