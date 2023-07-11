import React from 'react'
import Aun_Muhammad from './images/Aun_Muhammad.webp'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={Aun_Muhammad} alt='Aun' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>I am software engineer and web_developer in python django framework and work on javascript framework</p>
                    <p>I am Aun Muhammad student of Islamia university of Bahawalpur.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
