import React from 'react'
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"
import team3 from "../../assets/team3.webp"





const AboutSection3 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 md:p-16 lg:p-28 gap-8 mb-14'>

        <div className='bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="zoom-in"
        >
            <div className='mb-6  h-96 w-auto object-cover'>
                <img src={team2} className="w-full h-full" />
            </div>

            <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 text-cyan-900 font-bold'>ALYSON JOYCE</h2>

            <p  className='text-lg md:text-xl text-gray-900 mb-6'>
                My name is Alyson, and I graduated from the Royal College of Art
                in London with over 13 years of experience working on various projects
                such as 3D modeling, 3D modeling,
                and architectural engineering." "Previously, I worked for MMG Architects.
            </p>
        </div>

        <div className='bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="zoom-in"
        >
            <div className='mb-6 h-96 w-auto object-cover'>
                <img src={team1} className="w-full h-full" />
            </div>

            <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 text-cyan-900 font-bold'>PETE ROBERTS</h2>

            <p  className='text-lg md:text-xl text-gray-900 mb-6'>
                My name is PETE, and it's a pleasure to meet you.
                I have a Masters degree in Architecture and Interior
                Design and have worked on a variety of design projects.
                The majority of my design work is for large-scale residential
                and commercial projects.
            </p>
        </div>


        <div className='bg-slate-100 p-4
        shadow-lg shadow-slate-500 rounded-sm hover:cursor-pointer
        hover:-translate-y-1 hover:scale-90 duration-300'
        data-aos="zoom-in"
        >
            <div className='mb-6 h-96 w-auto object-cover' >
                <img src={team3} className="w-full h-full" />
            </div>

            <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 text-cyan-900 font-bold'>DIANA JAMES</h2>

            <p  className='text-lg md:text-xl text-gray-900 mb-6'>
                My name is Diana, and I am an architectural designer
                with over 8 years of experience." I enjoy experimenting
                with natural materials and forms. 
                I have extensive experience with 3D visualization,
                product design, and 3D modeling.
            </p>
        </div>

    </div>
  )
}

export default AboutSection3