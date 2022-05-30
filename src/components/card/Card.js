import React from 'react'



const Card = (props) => {

  return (
    <div className='text-center bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="zoom-out-right"
    >
        <h2 className="text-lg md:text-2xl lg:text-4xl mb-3 font-bold">{props.item.title}</h2>
        <h3 className="text-lg md:text-2xl lg:text-4xl mb-3">
            <span>$</span>
            <span>{props.item.price}</span>
        </h3>

        <ul className='text-lg'>
            <li className='mb-4'>{props.item.services[1]}</li>
            <li className='mb-4'>{props.item.services[2]}</li>
            <li className='mb-4'>{props.item.services[3]}</li>
            <li className='mb-4'>{props.item.services[4]}</li>
            <li className='mb-4'>{props.item.services[5]}</li>
            <li className='mb-4'>{props.item.services[6]}</li>
            <li className='mb-4'>{props.item.services[7]}</li>
        </ul>

        <div>
            <span className='mr-3'>COMPLETION PERIOD:</span>
            <span className='italic'>{props.item.period}</span>
        </div>
    </div>
  )
}

export default Card