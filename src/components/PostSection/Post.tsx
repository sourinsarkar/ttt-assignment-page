import Data from "../../data/Data.json"
import ProfileBioIcons from "../ProfileSection/ProfileBioIcons";

const name = Data.profile.name.toLowerCase().replace(" ","");

const Post: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>{Data.posts[0].headline}<h1></h1></div>
                <div><ProfileBioIcons iconName="ThumbsUp" color="bg-[#fec03f]"/></div>
            </div>
            <div><h1>{Data.posts[0].content[0]}</h1></div>
            <div className="flex justify-between">
                <div><p>thought <span>by {name}</span></p></div>
                <div className="flex">
                    <div>{Data.posts[0].metaData.date}</div>
                    <div>&#183;</div>
                    <div>{Data.posts[0].metaData.duration} min Read</div>
                    <div>&#183;</div>
                    <div>{Data.posts[0].metaData.views} Views</div>
                </div>
            </div>
        </div>
    );
}

export default Post