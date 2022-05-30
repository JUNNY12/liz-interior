import React from 'react'
import PortfolioSection1 from './PortfolioSection1'
import PortfolioImages from '../portfolio/PortfolioImages'
import ImageData from '../portfolio/ImageData'
import PortfolioSection2 from './PortfolioSection2'

const Portfolio = () => {

    const Images = ImageData.map((item) => {
        return <PortfolioImages 
        key={item.id}
        item={item}
        />
    })


  return (
    <div>
        <PortfolioSection1 />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 md:px-28'>
            {Images}
        </div>
        <div>
            <PortfolioSection2 />
        </div>
    </div>
  )
}

export default Portfolio