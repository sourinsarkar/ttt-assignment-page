import { Star, ThumbsUp, Eye, Heart, Triangle, Check } from 'iconoir-react'
import IconProp from './BioIconProp';

type IconName = 'Star' | 'ThumbsUp' | 'Eye' | 'Heart' | 'Triangle' | 'Check';

const iconComponents: { [name in IconName]: React.ComponentType} = {
    Star: Star,
    ThumbsUp: ThumbsUp,
    Eye: Eye,
    Heart: Heart,
    Triangle: Triangle,
    Check: Check,
};

interface Props {
    iconName: IconName;
    value?: string;
    color?: string;
    strokewidth?: string;
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