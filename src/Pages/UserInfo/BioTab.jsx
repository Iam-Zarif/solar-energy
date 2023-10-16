/* eslint-disable react/prop-types */
import {BiSolidUserCircle} from "react-icons/bi"
import  {FaIdCardClip} from "react-icons/fa6"
import {GoDiscussionOutdated} from "react-icons/go"
const BioTab = ({User, UserInfo}) => {
    // console.log(UserInfoEmail[1]?.email)
    // console.log(UserInfo)
   
  
  

    return (
        <div>
            
             <div className="flex flex-col gap-3">
        <div className='flex items-center gap-1 text-lg font-semibold'>
            <BiSolidUserCircle size={32}/>
            <span>Full Name : <span className='name font-normal text-sky-700'>{User?.displayName}</span></span>
        </div>
        <div className='flex items-center gap-1 text-lg font-semibold'>
            <FaIdCardClip size={32}/>
            <span>UID : <span className='name font-normal text-sky-700'>{User?.uid}</span></span>
        </div>
        <div className='flex items-center gap-1 text-lg font-semibold'>
            <GoDiscussionOutdated className='bg-black text-white rounded-md' size={32}/>
            <span>User Since : <span className='name font-normal text-sky-700'>{User?.metadata?.creationTime}</span></span>
        </div>
      </div>
      <div>
      
        {
            UserInfo?.map((user) =>{
                return ( <div key={user._id}>
                    <p>{user?.email}</p>
                </div>)
            })
        }
      </div>
        </div>
    );
};

export default BioTab;

