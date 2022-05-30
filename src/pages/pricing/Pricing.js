import React from 'react'
import PricingSection1 from '../pricing/PricingSection1'
import PricingSection2 from '../pricing/PricingSection2'
import PricingSection3 from '../pricing/PricingSection3'
import PricingSection4 from './PricingSection4'
import Card from '../../components/card/Card'
import CardData from '../pricing/CardData'
import ScrollTop from '../../components/scrollTop/ScrollTop'

const Pricing = () => {

    const CardItems = CardData.map((item) => {
        return <Card 
        key={item.id}
        item={item}
        />
    })



  return (
    <div>
        <PricingSection1 />
        <PricingSection2 />
        <PricingSection3 />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-28'>
            {CardItems}
        </div>
        <PricingSection4 />
        <ScrollTop />
    </div>
  )
}

export default Pricing