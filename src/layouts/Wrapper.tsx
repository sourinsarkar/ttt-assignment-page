import Navbar from "../components/NavSection/Navbar";
import Profile from "../components/ProfileSection/Profile";

function Wrapper() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Navbar />
      <div className="max-w-screen-md m-auto">
        <Profile />
      </div>
      
    </div>
  );
}

export default Wrapper;
