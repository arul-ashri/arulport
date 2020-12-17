import React from 'react'
import timelineData from './TImelineData'
import '../App.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" >
                <img src={data.img} alt="yo"  height='100px' width= '120px'/>
            </span>
            
            <p>{data.text}</p>
            <p>{data.qual}</p>
            <time>{data.date}</time>
            <span className="circle" />
        </div>
    </div>
);

const Timelineh = () =>
    timelineData.length > 0 && (
        <div className="timeline-container mt-5 mb-5">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );



 const Timeline = () => {
    return (
        <div className="p-3">
         <h3 className="col-md-3 offset-md-1" style={{color: 'white', }}><span className="fa fa-graduation-cap"></span>EDUCATION</h3>
            <Timelineh />
        </div>
    )
}


export default Timeline;