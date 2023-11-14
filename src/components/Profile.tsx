import Data from "../data/Data.json"

function Profile() {
    return (
        <div>
            <img src={Data.profile.coverPicture} />
            <img src={Data.profile.profilePicture} />
        </div>
    );
}

export default Profile