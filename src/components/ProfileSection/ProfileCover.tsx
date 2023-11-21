import CoverPicture from "../../assets/images/cover-picture.png"

const ProfileCover: React.FC = () => {
  return (
    <div>
      <div className="xl:h-80">
        <img src={CoverPicture} alt="Cover Picture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileCover;
