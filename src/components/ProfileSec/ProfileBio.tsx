import importedData from "../../data/Data.json";

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

const ProfileBio: React.FC = () => {
    return (
        <div>
            <div>{Data.bio.likes}</div>
        </div>
    );
}

export default ProfileBio