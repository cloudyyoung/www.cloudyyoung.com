import React from 'react'

import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='navbar'></div>
      <div className='container'>
        {/* <div className='bread'>Home</div> */}

        <div className='mesh-grad'></div>

        <div className='hero'>
          <div className='name'>
            Yunfan Yang,
          </div>
          <div className='intro'>
            a Software Development Intern at AGvisorPRO Inc, and a Computer Science student at the University of Calgary.
          </div>
        </div>

        <div className='illustrations'>
          <div className='illustration-02'></div>
          <div className='illustration-09'></div>
        </div>

        
        <div className='greeting'>
          <div className='headline'>
            Hey! Welcome to my little space on the Internet. I live and I code.
          </div>

          <div className='bio'>
            I focus on mainly web technologies, and self-teaching designs.
            As a computer science student, my disciplines drive me exploring all different areas in the fields of Computer Science, Data Science and Software Engineering. 
          </div>

          <div className='bio'>
            I am always passionate about learning new technologies and building cool stuff.
            You will be able to find some of my works here. They are rarely in the same areas as my interests are always changing from time to time. I hope you will find something interesting.
          </div>
        </div>

        <div className='footer'>
          <div>Built with React</div>
          <div>&copy; Yunfan Yang 2023</div>
        </div>
      </div>
    </>
  )
}

export default Home