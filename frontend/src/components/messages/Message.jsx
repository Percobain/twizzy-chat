import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component'
            src={"https://i.pinimg.com/1200x/bd/26/f9/bd26f9a54e6e03a9422faecc313661d8.jpg" }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-fuchsia-950`}>Wagwan Famalam?</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>09:11</div>   
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