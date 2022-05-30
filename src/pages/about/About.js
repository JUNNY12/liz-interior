import React from 'react'
import ScrollTop from '../../components/scrollTop/ScrollTop'
import AboutSection1 from '../about/AboutSection1'
import AboutSection2 from '../about/AboutSection2'
import AboutSection3 from '../about/AboutSection3'

const About = () => {
  return (
    <div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <ScrollTop />
    </div>
  )
}

export default About