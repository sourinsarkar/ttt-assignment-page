import Post from "./Post";
import Data from '../../data/Data.json'

const name = Data.profile.name.toLowerCase().replace(" ","");

const PostShowcase: React.FC< {} > = () => {
    return (
        <div>
            <Post postAuthor={name} postHeadline={Data.posts[2].headline} postContent={Data.posts[2].content[2]} postDate={Data.posts[0].metaData.date} postDuration={Data.posts[0].metaData.duration} postViews={Data.posts[0].metaData.views} />
            <Post postAuthor={name} postHeadline={Data.posts[1].headline} postContent={Data.posts[1].content[1]} postDate={Data.posts[1].metaData.date} postDuration={Data.posts[1].metaData.duration} postViews={Data.posts[1].metaData.views} />
            <Post postAuthor={name} postHeadline={Data.posts[2].headline} postContent={Data.posts[2].content[2]} postDate={Data.posts[2].metaData.date} postDuration={Data.posts[2].metaData.duration} postViews={Data.posts[2].metaData.views} />
        </div>
    );
}

export default PostShowcase