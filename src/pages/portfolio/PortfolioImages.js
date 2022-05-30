import React from 'react'

const PortfolioImages = (props) => {


  console.log(props.item)
  return (
    <div className='h-96 object-cover w-auto
    hover:cursor-pointer hover:-translate-y-1 
    hover:scale-90 duration-300'
    data-aos="flip-down">
        <img src={props.item.image} className="h-full w-full" />
    </div>
  )
}

export default PortfolioImages