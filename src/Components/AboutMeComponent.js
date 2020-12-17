import React from 'react'
import '../App.css';

function AboutMe() {
    return (
        <div className="container-fluid b12"
          style={{
              backgroundColor:   '#1b2735',
              color: 'white',
              padding: 40,
          }} >
          <div > 
                <h3  className="col-md-4 offset-md-1" style={{color: 'white'}}>ABOUT ME</h3>
          </div>
          <div className="row mt-5">
               <div className="col-md-4 mt-5">
                 <img src="/assets/images/selfie-boy.png"  alt="boi" style={{ height: 500,width: 400, marginLeft: 10}} />
               </div>
                
                <div className="col-md-8 " style={{fontFamily: 'inherit', fontSize: 18, fontWeight:250}}>
                        <div className="m-4">
                        Hey There!
                        </div> 

                        <div className="m-4">
                        I'm Arul Ashri, and as you might have already read,
                         I'm a Developer, Programmer, Vocalist, Pianist and a Guitarist. This website was made to showcase all of what I can do and plan to do.
                         Don't judge my writing based on this section though, this is by far my shoddiest work yet.
                       </div>

                       <div className="m-4">
                       I got into development because computers have always fascinated me. int i = 10; creates an integer of value 10? 
                       LIKE, WOW! But seriously, just seeing code getting converted to things we use regularly, like Facebook or Amazon,
                        was no less than magic to me and that's where my quest to invent began.
                       </div>

                       <div className="m-4">
                       I got into music, singing and play intrumemts because who doesn't likes music. Singing and play instruments made 
                       it possible for me to express how i feel in the easiet and the most beautiful way. Playing guitar along with singing K.K.
                       songs takes me to another world :) 
                       </div>

                       <div className="m-4">
                       I created this website so I could showcase all this and through this process, make it easier for you to connect with me.
                        If you like what you see, head over to the contact section below and send me a text. I would love to hear from you!
                       </div>

                        
                </div>
            </div>
        </div>
    )
}

export default AboutMe