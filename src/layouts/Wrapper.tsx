import Navbar from "../components/NavSection/Navbar";
import Profile from "../components/ProfileSection/Profile";
import ProfileCover from "../components/ProfileSection/ProfileCover";
import PostShowcase from "../components/PostSection/PostShowcase";

function Wrapper() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Navbar />
      <div className="max-w-screen-md m-auto">
        <ProfileCover />
        <div className="mx-10">
          <Profile />
          <PostShowcase />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
