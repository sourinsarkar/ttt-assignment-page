import Data from "../data/Data.json"

function Profile() {
    return (
        <div>
            <img src={Data.profile.coverPicture} />
        </div>
    );
}

export default Profile