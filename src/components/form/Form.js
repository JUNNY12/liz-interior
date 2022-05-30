import React from 'react'

const Form = () => {
  return (
    <div className='px-10 md:px-28 mb-10' data-aos="zoom-in">
        <form>
            <div className='mb-4'>
                <label className='text-cyan-900 text-xl font-bold'>First Name</label><br />
                <input type="text" placeholder='First Name' className='w-full h-10 bg-slate-200 border-none outline-none
                 text-cyan-900 text-xl shadow-slate-700 shadow-sm 
                 focus:shadow-xl' />
            </div>

            <div className='mb-4'>
                <label className='text-cyan-900 text-xl font-bold'>Last Name</label><br />
                <input type="text" placeholder='Last Name' className='w-full h-10 bg-slate-200 border-none outline-none
                 text-cyan-900 text-xl shadow-slate-700 shadow-sm 
                 focus:shadow-xl' />
            </div>

            <div className='mb-4'>
                <label className='text-cyan-900 text-xl font-bold'>Phone Number</label><br />
                <input type="number" placeholder='Phone Number' className='w-full h-10 bg-slate-200 
                 border-none outline-none
                 text-cyan-900 text-xl shadow-slate-700 shadow-sm 
                 focus:shadow-xl' />
            </div>

            <div className='mb-6'>
                <label className='text-cyan-900 text-xl font-bold'>Email</label><br />
                <input type="email" placeholder='Email' className='w-full h-10 bg-slate-200 border-none outline-none
                 text-cyan-900 text-xl shadow-slate-700 shadow-sm 
                 focus:shadow-xl' />
            </div>

            <div className='mb-4'>
                <textarea name="" id="" placeholder='Message' rows="3" className='w-full bg-slate-200 border-none outline-none
                 text-cyan-900 text-xl shadow-slate-700 shadow-sm 
                 focus:shadow-xl'></textarea>
            </div>

            <div className='mb-4'>
                <button className='w-full bg-slate-200 h-10
                shadow-slate-700 shadow-sm 
                hover:shadow-xl text-cyan-900 text-xl
                '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form