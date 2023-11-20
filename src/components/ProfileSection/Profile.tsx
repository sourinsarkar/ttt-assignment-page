import importedData from "../../data/Data.json";
import Stats from "./Stats";
import ProfileBio from "./ProfileBio";
import { Triangle, Check } from "iconoir-react/regular";
import StatusIconProp from "./StatusIconProp";

type ProfileType = {
  name: string;
  coverPicture: string;
  profilePicture: string;
  follower: string;
  following: string;
  post: string;
  [key: string]: string;
};

const Data = {
  profile: importedData.profile as ProfileType,
};

const toCamelCase = (str: string): string => {
  const newstr: string = str.charAt(0).toUpperCase() + str.slice(1);
  return newstr;
};

const followerKey: string | undefined = Object.keys(Data.profile).find((key) => Data.profile[key] === Data.profile.follower) + "s";
const followingKey: string | undefined = Object.keys(Data.profile).find((key) => Data.profile[key] === Data.profile.following
);

const camelCaseFollowerKey = followerKey ? toCamelCase(followerKey) : undefined;
const camelCaseFollowingKey = followingKey ? toCamelCase(followingKey) : undefined;

const Profile: React.FC = () => {
  return (
    <div> 
      <div>
        <div>
          <div className="flex items-end mt-[-5%] mb-8 gap-10">
            <div className="flex justify-center">
              <div className=" h-40 rounded-full border-2 border-[#111111]">
                <img src={Data.profile.profilePicture} alt="Profile Picture" className="w-full h-full rounded-inherit"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div>
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <div>
                      <h1 className="font-bold text-2xl">{Data.profile.name}</h1>
                    </div>
                    <div className="p-1 rounded-full bg-[#402773]">
                        <Triangle height={13} width={13} color='#ffffff' strokeWidth={4}/>
                    </div>
                    <div className="p-1 rounded-full bg-[#5fe0a0]">
                      <StatusIconProp>
                        <Check />
                      </StatusIconProp>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-4">
                  <div className="w-full flex">
                    <Stats value={Data.profile.follower} statTopic={camelCaseFollowerKey} />
                  </div>

                  <div className="w-full flex">
                    <Stats value={Data.profile.following} statTopic={camelCaseFollowingKey} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ProfileBio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;