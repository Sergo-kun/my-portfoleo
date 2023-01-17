import React from 'react'

function Uk({setLanuage, uk, ukraine, calculate_age, myPhoto, tik, HiPeople, thisYear}) {
  return (
    <div>
         <header>
          <button className='button-icon'>
            <div className='icon'></div>
           
          </button>
          <nav className='side__nav'>
          
            <ul>
            <li> <a href="#content1">About me</a></li>
            <li> <a href="#content2">Education</a></li>
            <li> <a href="#content3">Skills</a></li>
            <li> <a href="#content4">Projects</a></li>
            <li> <a href="#content5">Contacts</a></li>
            </ul>
            
        </nav>
           {/*  <nav className='header__nav'>
           <a href="#content1">About me</a>
           <a href="#content2">Education</a>
           <a href="#content3">Skills</a>
           <a href="#content4">Projects</a>
           <a href="#content5">Contacts</a>
        </nav>   */}
          
        </header>

        <div className='lanuage'>
          <img src={uk} alt='' width='30px' height='30px' onClick={() => setLanuage("uk")}></img>
          <img src={ukraine} alt='' width='30px' height='30px'  onClick={() => setLanuage("ukraine")}></img>
          
        </div>
       
        <body >
          
          <div className='content'>
          <div id='content1' className='about-me'>
            
            <div className='about-me__first'>
              <h1>Sergey Kovalenko</h1>
              <p>{calculate_age()} years old.<br/>
               <span>Position:</span> Junior (Trainee) Full stack Developer.<br/>
               <span>Employment:</span> full time.<br/>
               <span>Work schedule:</span> flexible schedule, full day.
                </p>
            </div>

        
            <hr/>
            <div className='about-me__second'>
              <div className='text'>
              <h2>About me</h2>
                <p>Hi, I`m a full-stack web developer, I prefer the full-stack specialization 
                    because I like both frontend and backend. Has created 
                  several projects using React, Redux, Node.js,
                   Mongo DB.</p><p> Also, if you wish, I can demonstrate my 
                   projects at the interview (you can also find them on my GitHub account:<a href='https://github.com/Sergo-kun'> https://github.com/Sergo-kun</a>).</p>
              </div>
              <div className='avatar'>
                <img src={myPhoto} width="300px" alt=""></img>
              </div>
            </div>
           
          
         
          </div>
          <hr className='big'/>

          


          <div id='content2' className='about-me'>
              <h1>EDUCATION AND RELEVANT EXPERIENCE</h1>
              <div className='about-me__second'>
                <div className='text'>
            <p>
            From 2017 to 2021 has studied at the International
             Scientific and Technical University named after
              Academician Yuri Bugay at the Faculty of Software
               Engineering, where has received a bachelor's degree.
               </p><p> Also, I took lessons from a web development tutor.
                 React, Redux, and Node.js were studied independently.
            </p>
            </div>
            </div>

            </div>
            <hr className='big'/>


        
            <div id='content3' className='about-me'>
            <h1>What I’m good at?</h1>
              <div className='about-me__second'>
             
              <div className='soft-skills' style={{'paddingBottom': '80px'}}>
                <h2 className='h2_soft'>SOFT SKILLS</h2>
                Problem-solving, communication, creative, attention to detail,
                 time management, and collaboration Responsible, honest, decent, able to learn, persevering, not conflicted, and cheerful.
                </div>
                <div className='hard-skills'>
                <h2>HARD SKILLS</h2>
                <div className='skills' style={{'justifyContent' : 'center'}}>
                <div className='skill'>CSS</div>
                <div className='skill'>HTML</div>
                <div className='skill'>JS</div>
                <div className='skill'>SQL</div>
                <div className='skill'>Mongoose</div>
                <div className='skill'>React</div>
                <div className='skill'>Redux</div>
                <div className='skill'>Node.js</div>
                <div className='skill'>GIT</div>
                </div>

                </div>
                </div>
                <div>

                </div>
            </div>


            <hr className='big'/>
            <div id='content4' className='about-me'>

                <h1>Projects</h1>
                <p style={{'margin' : '5%'}}> Check out some of my wotk right here:</p>
                <div className='skills'>
                  <div className='project'>
                      <img src={tik} alt='' width='300px' height='250px'/>
                      <p className='project__desc'>Tic Tac Toe - just a game</p>
                      <div className='project__links'>
                          <a href='https://tik-tak-toe-mu.vercel.app/'>Demo</a>
                          <a href='https://github.com/Sergo-kun/tikTakToe'>Code</a>
                      </div>
                  </div>
                  <div className='project'>
                      <img src={HiPeople} alt='' width='305px' height='250px'/>
                      <p className='project__desc'>
                        My study project of social-network
                        </p>
                      <div className='project__links'>
                         
                          <a href='https://github.com/Sergo-kun/HiPeople/tree/main/server'>Code</a>
                      </div>
                  </div>
                </div>
              </div>
                <hr className='big'/>
              <div id='content5' className='about-me'>
                  <h1>CONTACT DETAILS</h1>
                  <div className='contact__text'>
                  <span>Email:</span> kowalenko619@gmail.com<br/>
                  <span>GitHub:</span> <a href='https://github.com/Sergo-kun'>https://github.com/Sergo-kun</a><br/>
                  <span>Linkedin:</span> <a href='linkedin.com/in/сергей-коваленко-49ab61212'>linkedin.com/in/сергей-коваленко-49ab61212</a>
                  
                  </div>
              </div>
              <footer class="footer">
        <p>
            <span class="nowrap">&copy; <time>{thisYear}</time></span>
            <span class="nowrap"> Sergey Kovalenko</span>
        </p>
    </footer>
          </div>

        

        
        </body>
       
    </div>
  )
}

export default Uk