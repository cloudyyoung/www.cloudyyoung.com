import './App.css'

const App = () => {
  return (
    <>
      <div className='navbar'></div>
      
      <div className='hero-container'>
        <div className='hero'>
          <div className='hero-blob'>
            <div className='grad-9'></div>
          </div>
          <div className='info-section'>
            <div>
              <div className='name'>Yunfan Yang</div>
              <div className='headline'>
                <p>Software Development Intern, AGvisorPRO Inc.</p>
                <p>BSc Computer Science, University of Calgary</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='greeting-container'>
        <div className='greeting'>
          <div className='greeting-short'>
            Nice to meet you
          </div>

          <div className='greeting-headline'>
            Hey! Welcome to my little space on the Internet. I'm Yunfan, I live and code.
          </div>

          <div className='bio'>
            I focus on mainly web development.
            As a computer science student, my disciplines drive me exploring all different areas in the fields of Computer Science, Data Science and Software Engineering. 
          </div>

          <div className='bio'>
            I am always passionate about learning new technologies and building cool stuff.
            You will be able to find some of my works here. They are rarely in the same areas as my interests are always changing from time to time. But I hope you will find something interesting.
          </div>
        </div>

        <div className='greeting-blob'>
          <div className='grad-18'></div>
        </div>
      </div>

      <div className='work'>
        <div className='work-title grad-1'>Works</div>
        <div className='work-list'>
          <div className='work-item'>Lifeline</div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-content'>
          <p>&copy; Yunfan Yang 2023</p>
        </div>
      </div>
    </>
  )
}

export default App
