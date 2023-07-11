import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Team_members.css'

const Team_members = () => {
    return (
        <div className='Team_members' id='Team_members'>
            <div className='container'>
                <h2>Team_members</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>This Python bootcamp is very clear, modular, comprehensive, and very inspiring. it is resourceful with explanations, examples step by step, solutions and experiences shared. Course is packed with all the things that a Python developer need.</p>
                        <p><span>Muhammad Safeer</span></p>
                        <p>Python Student</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Sir Arslan is a great teacher and I have taken some other courses of him. This one seems to be of the same great quality. If you want a simple code-along, this is not for you. Muhammad Arslan will Challenge you to actually use what he teaches you many times along the way.</p>
                        <p><span>Faeez shabbir</span></p>
                        <p>Flutter expert</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Well, subtain has been excellent through out the course. With excellent examples, comprehensive coding challenges and awesome projects, this course surely delivers as expected. Thank you for this amazing course.</p>
                        <p><span>Muhammad subtain humza</span></p>
                        <p>IT expert</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team_members
