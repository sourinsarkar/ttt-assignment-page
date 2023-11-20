import { Star, ThumbsUp, Eye, Heart } from 'iconoir-react'

type IconName = 'Star' | 'ThumbsUp' | 'Eye' | 'Heart';

const iconComponents: { [name in IconName]: React.ComponentType} = {
    Star: Star,
    ThumbsUp: ThumbsUp,
    Eye: Eye,
    Heart: Heart,
};

interface Props {
    iconName: IconName;
    value: string;
};

const ProfileBioIcons: React.FC<Props> = ({ iconName, value }) => {
    const Icon = iconComponents[iconName];
    return(
        <div>
            <div>
                <Icon />
            </div>
            <div>{value}</div>
        </div>
    );
}

export default ProfileBioIcons