import Data from '../data/Data.json'
import { Triangle, Check } from 'iconoir-react'

const Profile: React.FC = () => {
    return(
        <div>
            <div>
                <div className='h-80 bg-green-400'>
                    <img src={Data.profile.coverPicture} alt="Cover Picture" className='w-full h-full object-cover' />
                </div>

                <div className='flex items-baseline justify-between mt-[-5%]'>
                    <div className='w-full flex justify-center'>
                        <div className='bg-green-400 h-40 rounded-full border-2 border-[#111111]'>
                            <img src={Data.profile.profilePicture} alt="Profile Picture" className='w-full h-full rounded-inherit'/>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div>
                            <ul>
                                <li>
                                    Anuj Gosalia
                                </li>
                                <li><Triangle /> </li>
                                <li><Check /> </li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default Profile