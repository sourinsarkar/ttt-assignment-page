import importedData from "../../data/Data.json";
import Stats from "./Stats";
import ProfileBio from "./ProfileBio";
import { Triangle, Check } from "iconoir-react/regular";
import StatusIconProp from "./StatusIconProp";
import ProfilePicture from "../../assets/images/profile-picture.png"

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
          <div className="flex items-end mt-[-5%] mb-8 gap-5">
            <div className="flex justify-center">
              <div className="xl:h-40 xl:w-40 xsm:h-32 xsm:w-32">
                <img src={ProfilePicture} alt="Profile Picture" className="w-full h-full rounded-full border-2 border-[#111111]/50" />
              </div>
            </div>
            <div className="flex items-start">
              <div>
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <div>
                      <h1 className="font-bold xl:text-2xl">{Data.profile.name}</h1>
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

                <div className="flex justify-between xl:gap-4 xsm:gap-3">
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