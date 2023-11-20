import ProfileBioIcons from "../ProfileSection/ProfileBioIcons";

interface Props {
  postAuthor: string;
  postHeadline: string;
  postContent: string | string[] | (string | string[])[];
  postDate: string;
  postDuration: string;
  postViews: string;
}

const Post: React.FC<Props> = ({
  postAuthor,
  postHeadline,
  postContent,
  postDate,
  postDuration,
  postViews,
}) => {
  return (
    <div className="pt-12 pb-10 border-b-2 border-black/5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          {postHeadline}
          <h1></h1>
        </div>
        <div>
          <ProfileBioIcons iconName="ThumbsUp" color="bg-[#fec03f]" />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <h1>
        {Array.isArray(postContent)
          ? postContent.map((item, index) => (
              <div key={index}>
                {Array.isArray(item) ? (
                  <ul>
                    {item.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{typeof item === "string" ? item : null}</p>
                )}
                {index !== postContent.length - 1 && <><br/><br/></>}
              </div>
            ))
          : null}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="text-[#5cb8c3] font-medium">
          <p>
            thought <span className="text-black">by {postAuthor}</span>
          </p>
        </div>
        <div className="flex post-meta-data">
          <div>{postDate}</div>
          <div>&#183;</div>
          <div>{postDuration} min Read</div>
          <div>&#183;</div>
          <div>{postViews} Views</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
