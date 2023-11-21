import ProfileBioIcons from "../ProfileSection/ProfileBioIcons";

interface Props {
  postAuthor: string;
  postHeadline: string;
  postContent: string | string[] | (string | string[])[];
  postDate: string;
  postDuration: string;
  postViews: string;
  postCategory: string;
}
  
const Post: React.FC<Props> = ({
  postAuthor,
  postHeadline,
  postContent,
  postDate,
  postDuration,
  postViews,
  postCategory
}) => {
  return (
    <div className="pt-12 pb-10 border-b-2 border-black/5">
      <div className="flex justify-between items-center">
        <div className="xl:text-2xl font-extrabold xsm:text-lg">
          {postHeadline}
        </div>
        <div>
          <ProfileBioIcons iconName="ThumbsUp" color="bg-[#fec03f]" />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <h1 className="xsm:text-sm xl:text-base">
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
      <div className="flex justify-between xl:text-sm xsm:text-[11px] ssm:text-xs">
        <div className="text-[#5cb8c3] font-medium">
          <p>
            {postCategory} <span className="text-black">by {postAuthor}</span>
          </p>
        </div>
        <div className="flex">
          <div className="mx-[2px]">{postDate}</div>
          <div className="mx-[2px]">&#183;</div>
          <div className="mx-[2px]">{postDuration} min Read</div>
          <div className="mx-[2px]">&#183;</div>
          <div className="mx-[2px]">{postViews} Views</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
