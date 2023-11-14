import Data from "../data/Data.json"

function Profile() {
    return (
        <div>
            <div className="mx-5">
                <div>
                    <img src={Data.profile.coverPicture} alt="Cover Picture" />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Profile