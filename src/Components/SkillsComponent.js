import React from 'react'
import { FaTools } from "react-icons/fa";
import '../App.css';

const Skills = () => {
    return (
        <div className="container">
            <div  className="row">
             <h3 className="col-md-3 " style= {{color: 'white', marginBottom: 50}} ><FaTools />  SKILLS</h3>
            </div>
            <div className="skill-container">
                <div className="skill">
                   React JS
                </div>
                <div className="skill">
                   Django
                </div>
                <div className="skill">
                   Core-CSS
                </div>
                <div className="skill">
                   Express JS
                </div>
                <div className="skill">
                   Mongo DB
                </div>
            </div>
        </div>
    )
}

export default Skills;