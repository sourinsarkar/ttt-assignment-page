import Data from "../data/Data.json"
import Stats from "./Stats";

const statIcons = ["Star", "ThumbsUp", "Eye", "Heart"]

function Profile() {
    return (
        <div>
            <div className="mx-5">
                <div>
                    <img src={Data.profile.coverPicture} alt="Cover Picture" />
                </div>  
                <div>
                    <div>
                        <div>
                            <img src={Data.profile.profilePicture} alt="Profile Picture" />
                        </div>
                        <div>
                            <div>
                                <h3>{Data.profile.name}</h3>
                                <span>icon</span>
                                <span>icon</span>
                            </div>
                            <div>
                                <div>
                                    <h3>{Data.profile.follower} </h3>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <h3>{Data.profile.following} </h3>
                                    <p>Following</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>{Data.bio.about} </h3>
                        <a href="/">{Data.bio.link} </a>
                    </div>

                    <div>
                        <Stats statIcons={statIcons[0]} />
                        <Stats statIcons={statIcons[1]} />
                        <Stats statIcons={statIcons[2]} />
                        <Stats statIcons={statIcons[3]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile