import importedData from "../../data/Data.json";
import ProfileBioIcons from "./ProfileBioIcons";

type ProfileBioType = {
    about: string;
    link: string;
    stars: string;
    likes: string;
    views: string;
    favourites: string;
};

const Data = {
    bio: importedData.bio as ProfileBioType,
};

const 

const ProfileBio: React.FC = () => {
    return (
        <div>
            <div><h2>{Data.bio.about}</h2></div>
            <div><a href={Data.bio.link}>{Data.bio.link}</a></div>
            <div>
                <ProfileBioIcons />
            </div>
        </div>
    );
}

export default ProfileBio