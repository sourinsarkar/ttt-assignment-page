import Navbar from "../components/NavSection/Navbar";
import Profile from "../components/ProfileSection/Profile";
import Post from "../components/PostSection/Post";
import ProfileCover from "../components/ProfileSection/ProfileCover";

function Wrapper() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Navbar />
      <div className="max-w-screen-md m-auto">
        <ProfileCover />
        <div className="mx-10">
          <Profile />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
