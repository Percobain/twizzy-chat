import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { useConversation } from '../../zustand/useConversation';

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className={`border-r border-slate-500 p-4 flex flex-col overflowy-auto h-auto ${selectedConversation ? 'hidden md:flex' : 'flex'} md:w-70`}>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <div className='my-3'>
          <LogoutButton />
        </div>
    </div>
  );
};

export default Sidebar


//STARTED CODE for Sidebar
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
        
//         <SearchInput />
//         <div className='divider px-3'></div>
//         <Conversations />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar