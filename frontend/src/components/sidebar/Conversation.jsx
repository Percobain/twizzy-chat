import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-fuchsia-950 rounded p-2 py-1 cursor pointer'>
            <div className='avatar online'>
                <div className="w-12 rounded-full ">
                    <img 
                    src="https://i.pinimg.com/1200x/bd/26/f9/bd26f9a54e6e03a9422faecc313661d8.jpg" 
                    alt="user avatar" 
                    />
                </div>
            </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>Boomri</p>
                        <span className='text-xl'>🐶</span>
                    </div>
                </div>
            </div>
        <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation




// STARTER CODE for Conversation
// import React from 'react'

// const Conversation = () => {
//     return (
//       <>
//           <div className='flex gap-2 items-center hover:bg-fuchsia-950 rounded p-2 py-1 cursor pointer'>
//               <div className='avatar online'>
//                   <div className="w-12 rounded-full ">
//                       <img 
//                       src="https://i.pinimg.com/1200x/bd/26/f9/bd26f9a54e6e03a9422faecc313661d8.jpg" 
//                       alt="user avatar" 
//                       />
//                   </div>
//               </div>
//                   <div className='flex flex-col flex-1'>
//                       <div className='flex gap-3 justify-between'>
//                           <p className='font-bold text-gray-200'>Boomri</p>
//                           <span className='text-xl'>🐶</span>
//                       </div>
//                   </div>
//               </div>
//           <div className='divider my-0 py-0 h-1'></div>
//       </>
//     )
//   }
  
//   export default Conversation