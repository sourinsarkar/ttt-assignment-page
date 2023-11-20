import importedData from "../../data/Data.json";
import { Triangle, Check } from "iconoir-react";
import Stats from "./Stats";

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
        <div className="h-80">
          <img src={Data.profile.coverPicture} alt="Cover Picture" className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-end mt-[-5%]">
          <div className="flex justify-center">
            <div className=" h-40 rounded-full border-2 border-[#111111]">
              <img src={Data.profile.profilePicture} alt="Profile Picture" className="w-full h-full rounded-inherit"
              />
            </div>
          </div>
          <div className="flex items-start">
            <div>
              <div className="mb-3">
                <ul className="flex items-center">
                  <li>
                    <h1 className="font-bold text-2xl">{Data.profile.name}</h1>
                  </li>
                  <li>
                    <Triangle />
                  </li>
                  <li>
                    <Check />
                  </li>
                </ul>
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
      </div>
    </div>
  );
};

export default Profile;
