import React from 'react'
import { BsFiles } from "react-icons/bs";
import '../App.css';

const Projects = () => {
    return (
        <div className="container">
         
            <div className="row">
                <h3 className="col-md-3 " style= {{color: 'white', marginTop: 80}}><BsFiles/> PROJECTS</h3>
            </div>
            <div style={{textAlign: 'center', color: 'white',paddding:70, }}>
                <h1>Ruko zara sabar karo  :(</h1>
            </div>
        </div>
    )
}

export default Projects;
