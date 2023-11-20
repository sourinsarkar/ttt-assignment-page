import Data from "../../data/Data.json"
import ProfileBioIcons from "../ProfileSection/ProfileBioIcons";

interface Props {
    postAuthor: string;
    postHeadline: string;
    postContent: string;
    postData: string;
    postDuration: string;
    postViews: string;
}

const Post: React.FC<Props> = ( { postAuthor, postHeadline, postContent, postData, postDuration, postViews } ) => {
    return (
        <div className="pt-10 pb-5">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-extrabold">{Data.posts[0].headline}<h1></h1></div>
                <div><ProfileBioIcons iconName="ThumbsUp" color="bg-[#fec03f]"/></div>
            </div>
            <div className="mt-6 mb-10"><h1>{Data.posts[0].content[0]}</h1></div>
            <div className="flex justify-between">
                <div className="text-[#5cb8c3] font-medium"><p>thought <span className="text-black">by {name}</span></p></div>
                <div className="flex post-meta-data">
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