import Data from '../../data/Data.json'

const ProfileCover: React.FC = () => {
  return (
    <div>
      <div className="h-80">
        <img src={Data.profile.coverPicture} alt="Cover Picture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileCover;
