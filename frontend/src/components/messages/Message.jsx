import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { useConversation } from '../../zustand/useConversation';
import { extractTime } from '../../utlis/extractTime';
/**/
const Message = ({message}) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-indigo-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>   
    </div>
  )
}

export default Message



// Starter code for Message.jsx
// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//           <img alt='Tailwind CSS chat bubble component'
//             src={"https://i.pinimg.com/1200x/bd/26/f9/bd26f9a54e6e03a9422faecc313661d8.jpg" }
//           />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-fuchsia-950`}>Wagwan Famalam?</div>
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>09:11</div>   
//     </div>
//   )
// }

// export default Message