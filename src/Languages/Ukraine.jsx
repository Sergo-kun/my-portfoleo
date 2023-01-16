import React from 'react'

function Ukraine({setLanuage, uk, ukraine, calculate_age, myPhoto, tik, HiPeople, thisYear}) {
 
  
 
 
 
    return (
    <div>
         <header>
          <button className='button-icon'>
            <div className='icon'></div>
           
          </button>
          <nav className='side__nav'>
          
            <ul>
            <li> <a href="#content1">Про мене</a></li>
            <li> <a href="#content2">Освіта</a></li>
            <li> <a href="#content3">Навики</a></li>
            <li> <a href="#content4">Проектии</a></li>
            <li> <a href="#content5">Котакти</a></li>
            </ul>
            
        </nav> 
        </header>

        <div className='lanuage'>
          <img src={uk} alt='' width='30px' height='30px' onClick={() => setLanuage("uk")}></img>
          <img src={ukraine} alt='' width='30px' height='30px'  onClick={() => setLanuage("ukraine")}></img>
          
        </div>
       
        <body>
          
          <div className='content'>
          <div id='content1' className='about-me'>
            
            <div className='about-me__first'>
              <h1>Сергій Коваленко</h1>
              <p>{calculate_age()} років.<br/>
               <span>Позиція:</span> Junior (Trainee) Full stack Developer.<br/>
               <span>Зайнятість:</span> повна зайнятість.<br/>
               <span>Графік роботи:</span> гнучкий графік, повний день.
                </p>
            </div>

        
            <hr/>
            <div className='about-me__second'>
              <div className='text'>
              <h2>About me</h2>
                <p>Я full-stack веб-розробник. Обрав full-stack напрямок,
                    тому що мені подобаються frontend та backend. Для себе створив декілька 
                    проектів застосовуючи React, Redux, Node.js,
                     Mongo DB.</p><p> Також при бажанні можу продемонструвати
                         свої проекти на співбесіді ( також ви їх можете знайти на моєму GitHub акаунті:<a href='https://github.com/Sergo-kun'> https://github.com/Sergo-kun</a>).</p>
              </div>
              <div className='avatar'>
                <img src={myPhoto} width="300px" alt=""></img>
              </div>
            </div>
           
          
         
          </div>
          <hr className='big'/>

          


          <div id='content2' className='about-me'>
              <h1>ОСВІТА ТА РЕЛЕВАНТНИЙ ДОСВІД</h1>
              <div className='about-me__second'>
                <div className='text'>
            <p>
            З 2017 по 2021 навчався в Міжнародному 
            науково-технічному университеті імені академіка
             Юрія Бугая, на факультеті програмної інженерії 
             де здобув осівут бакалавра.
               </p><p> Брав уроки у репетитора по веб-розробці.
                 React, Redux, Node.js вивчав самостійно.
            </p>
            </div>
            </div>

            </div>
            <hr className='big'/>


        
            <div id='content3' className='about-me'>
            <h1>Що я добре вмію?</h1>
              <div className='about-me__second'>
             
              <div className='soft-skills' style={{'paddingBottom': '24.5%'}}>
                <h2 className='h2_soft'>ОСОБИСТІ НАВИКИ</h2>
                 Вирішення проблем, комунікативність, креативність, увага до деталей,
                 тайм менеджмент та співпраця, відповідальність, чесність, пристойність, бажання навчатися, наполегливість, не конфліктний та веселий.
                </div>
                <div className='hard-skills'>
                <h2>КЛЮЧОВІ НАВИКИ</h2>
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

                <h1>Проекти</h1>
                <p style={{'margin' : '5%'}}>Можете переглянути мої проекти тут:</p>
                <div className='skills'>
                  <div className='project'>
                      <img src={tik} alt='' width='300px' height='250px'/>
                      <p className='project__desc'>Хрестики-нулики - просто гра{')'}.</p>
                      <div className='project__links'>
                          <a href='https://tik-tak-toe-mu.vercel.app/'>Демо</a>
                          <a href='https://github.com/Sergo-kun/tikTakToe'>Код</a>
                      </div>
                  </div>
                  <div className='project'>
                      <img src={HiPeople} alt='' width='305px' height='250px'/>
                      <p className='project__desc' style={{'width' : '305px'}}>
                        МІй навчальник проект - соціальна мережа.
                        </p>
                      <div className='project__links'>
                         
                          <a href='https://github.com/Sergo-kun/HiPeople/tree/main/server'>Код</a>
                      </div>
                  </div>
                </div>
              </div>
                <hr className='big'/>
              <div id='content5' className='about-me'>
                  <h1>КОНТАКТНІ ДАННІ</h1>
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

export default Ukraine