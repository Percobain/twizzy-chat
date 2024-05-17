import React from 'react'

const GenderCheckbox = ({ onCheckBoxchange, selectedGender }) => {
  return (
    <div className='flex'>
        <div className = 'form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='text-indigo-950 label-text'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={selectedGender === "male"}
                    onChange={(e) => onCheckBoxchange("male")}
                />
            </label>
        </div>

        <div className = 'form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='text-indigo-950 label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={selectedGender === "female"}
                    onChange={(e) => onCheckBoxchange("female")}                    
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox



// STARTER CODE FOR GenderCheckbox
// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className = 'form-control'>
//               <label className={`label gap-2 cursor-pointer`}>
//                   <span className='text-indigo-950 label-text'>Male</span>
//                   <input type='checkbox' className='checkbox border-slate-900' />
//               </label>
//           </div>
  
//           <div className = 'form-control'>
//               <label className={`label gap-2 cursor-pointer`}>
//                   <span className='text-indigo-950 label-text'>Female</span>
//                   <input type='checkbox' className='checkbox border-slate-900' />
//               </label>
//           </div>
  
//       </div>
//     )
//   }
  
//   export default GenderCheckbox