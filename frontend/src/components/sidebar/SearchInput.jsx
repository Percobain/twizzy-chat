import { IoSearchSharp } from "react-icons/io5";
import React from 'react'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-neutral-900 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput


// STARTER CODE for SearchInput
// import { IoSearchSharp } from "react-icons/io5";
// import React from 'react'

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-fuchsia-950 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none" />
//         </button>
//     </form>
//   )
// }

// export default SearchInput