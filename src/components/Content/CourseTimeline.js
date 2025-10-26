import React from 'react';
import './courseTimeline.css';

const courseDates = [
    { dateOne: "06-12-2025", dateTwo: "07-12-2025", location: "Katowice, Francuska 184" },
    { dateOne: "13-12-2025", dateTwo: "14-12-2025", location: "Katowice, Francuska 184" },
    { dateOne: "20-12-2025", dateTwo: "21-12-2025", location: "Katowice, Francuska 184" },
    { dateOne: "03-01-2025", dateTwo: "04-12-2025", location: "Katowice, Francuska 184" },
];

const CourseTimeline = () => {
    return (
        <div className="timeline-section">
            <div className="timeline-container">
                {courseDates.map((item, index) => {
                    const side = index % 2 === 0 ? 'left' : 'right';
                    return (
                        <div key={index} className={`timeline-item ${side}`}>
                            <div className="timeline-content">
                                <h3>{item.dateOne}</h3>
                                <h3>{item.dateTwo}</h3>
                                <p>{item.location}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseTimeline;