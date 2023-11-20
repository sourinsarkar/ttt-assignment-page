import { Star, ThumbsUp, Eye, Heart } from 'iconoir-react'
import IconProp from './BioIconProp';

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
    color: string;
};

const ProfileBioIcons: React.FC<Props> = ({ iconName, value, color }) => {
    const Icon = iconComponents[iconName];
    return(
        <div className='flex items-center gap-2'>
            <div className={`${color} p-1.5 rounded-full`}>
                <IconProp>
                    <Icon />
                </IconProp>
            </div>
            <div>{value}</div>
        </div>
    );
}

export default ProfileBioIcons