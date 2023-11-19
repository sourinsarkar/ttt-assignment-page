import Data from '../data/Data.json'
import { Triangle, Check } from 'iconoir-react'
import Stats from './Stats';

const Profile: React.FC = () => {
    return(
        <div>
            <div>
                <div className='h-80 bg-green-400'>
                    <img src={Data.profile.coverPicture} alt="Cover Picture" className='w-full h-full object-cover' />
                </div>

                <div className='flex items-end justify-between mt-[-5%]'>
                    <div className='w-full flex justify-center'>
                        <div className='bg-green-400 h-40 rounded-full border-2 border-[#111111]'>
                            <img src={Data.profile.profilePicture} alt="Profile Picture" className='w-full h-full rounded-inherit'/>
                        </div>
                    </div>
                    <div className='w-full flex items-start'>
                        <div>
                            <div>
                                <ul className='flex items-center'>
                                    <li>
                                        <h1 className='font-bold text-2xl'>{Data.profile.name}</h1>
                                    </li>
                                    <li><Triangle /> </li>
                                    <li><Check /> </li>
                                </ul>
                            </div>

                            <div className='flex justify-between bg-slate-200'>
                                <div className='w-full flex'>
                                    <Stats value={Data.profile.follower} />
                                </div>
                                
                                <div className='w-full flex'>
                                    <Stats value={Data.profile.following} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default Profile