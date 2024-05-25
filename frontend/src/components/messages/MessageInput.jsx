import React from 'react';
import { Link } from 'react-router-dom';
import { BsSend } from 'react-icons/bs';

const MessageInput = ({ handleSubmit, message, setMessage, loading }) => {
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative flex items-center'>
        <Link to="/login" className='mr-4'>
        <button className="btn btn-ghost p-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
        <input 
          type='text' 
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



// Starter code for MessageInput.jsx
// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input 
//                 type='text' 
//                 className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//                 placeholder='Send a message'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend />
//             </button>
                
//         </div>
//     </form>
//   )
// }

// export default MessageInput