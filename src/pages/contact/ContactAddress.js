import React from 'react'

const ContactAddress = () => {
  return (
    <div className='px-10 md:px-28 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

        <div className='text-center bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="fade-up"
        >
            <h3 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900'>Contact</h3>

            <p className='text-lg md:text-xl text-gray-900'>
                <a href='mailto:Lizinterior@helpdesk.info'>Lizinterior@helpdesk.info</a>
            </p>
        </div>

        <div className='text-center bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="fade-right"
        >
            <h3 className='text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-cyan-900'>Address</h3>

            <p className='text-lg md:text-xl text-gray-900'>
               No 96, Lycium Iopsom Kysium Street, Nigeria.
            </p>
        </div>

        <div className='text-center bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="fade-right-down"
        >
            <h3 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold text-cyan-900'>Office Hours</h3>

            <p className='text-lg md:text-xl text-gray-900'>
                Monday - Friday <br />
                08:00AM - 06:00PM
            </p>
        </div>

    </div>
  )
}

export default ContactAddress