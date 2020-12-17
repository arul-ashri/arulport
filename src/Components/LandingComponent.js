import React from 'react'
import '../App.css';
import { FaLinkedin,FaGithub,FaFacebook,FaInstagram,FaTwitter,FaQuora } from 'react-icons/fa';
import { IconContext } from 'react-icons';    
import Particles from 'react-particles-js';  

function Landing() {
    return (
        <div className="row bg">
        <Particles 
        canvasClassName="example"
        params={{
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                        "enable": true,
                        "value_area": 1803.4120608655228
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 2,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.4008530152163807,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 20,
                    "opacity": 0.3687847739990702,
                    "width": 0.6413648243462091
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }}
        />
           <img src="assets/images/mainpic.jpg" np alt="dp" className="dpimg col-12 col-sm-auto offset-sm-4" />
           <div className="me">
                <div id="title">
                   <span>ARUL ASHRI</span>
                </div> 
                <div className="desc">
                    <div>
                    <span className="text-blue-600">const</span>{" "}
                    <span className="text-orange-400">arul</span>:{" "}
                    <span className="text-orange-400">Array</span>&lt;
                    <span className="text-green-400">Ingredient</span>&gt;{" "}
                    <span className="text-blue-600">=</span> [
                    </div>
                    <div>
                    <span className="text-red-500"> {" "}</span>.{" "}
                    <span className="text-red-500">Developer</span>,{" "}
                    <span className="text-red-500">Programmer</span>,{" "}
                    <span className="text-red-500">Vocalist</span>,{" "}
                    </div>
                    <div>
                    <span className="text-red-500"> </span>.{" "}
                    <span className="text-red-500">Pianist</span>,{" "}
                    <span className="text-red-500">Guitarist</span>, ...
                    <span className="text-red-500">everythingNice</span>,
                    </div>
                    <div>];</div>
                </div>
                <div className="social">
                <IconContext.Provider value={{ size: '3em' }}>
                    <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://github.com/arul-ashri'
                        target='_blank'
                    >
                        <FaGithub />
                    </a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '3em' }}>
                   <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://www.linkedin.com/in/arul-ashri-006875189/'
                        target='_blank'
                    >
                        <FaLinkedin />
                    </a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '3em' }}>
                    <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://www.instagram.com/arul.ashri/'
                        target='_blank'
                    >
                        <FaInstagram />
                    </a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '3em' }}>
                    <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://www.facebook.com/arul.ashri.9/'
                        target='_blank'
                    >
                        <FaFacebook />
                    </a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '3em' }}>
                    <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://www.quora.com/profile/Arul-Ashri'
                        target='_blank'
                    >
                        <FaTwitter />
                    </a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '3em' }}>
                    <div className="sb">
                    <a
                        style={{ textDecoration: 'none', color: "white" }}
                        href='https://www.instagram.com/arul.ashri/'
                        target='_blank'
                    >
                        <FaQuora />
                    </a>
                    </div>
                </IconContext.Provider>
          </div>  
           </div>
        </div>
    )
}
export default Landing;