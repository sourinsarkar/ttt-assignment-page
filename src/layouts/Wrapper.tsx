import Navbar from "../components/NavSection/Navbar";
import Profile from "../components/ProfileSection/Profile";
import ProfileCover from "../components/ProfileSection/ProfileCover";
import PostShowcase from "../components/PostSection/PostShowcase";
import Divider from "../components/DividerSec/Divider";

function Wrapper() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Navbar />
      <div className="max-w-screen-md m-auto">
        <ProfileCover />
        <div className="mx-10">
          <Profile />
        </div>
        <Divider />
        <div className="mx-10">
          <PostShowcase />
        </div>

      </div>
    </div>
  );
}

export default Wrapper;
