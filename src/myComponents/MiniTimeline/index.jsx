import React from 'react';
import {string, shape, arrayOf, any} from 'prop-types';

import './index.css';

const MiniTimeline = ({
    title,
    jobs
}) => {
    return(
        <div className="MiniTimeline">
            {title && (
                <h2 className="blockTitle">Employment</h2>
            )}
            <ul>
                {jobs.map((job, index)=>{
                    return (
                        <li key={`job-${index}`} className="MiniTimeLineItem mb-3">
                            <h4 className="mb-0 blockTitle">{job.title}</h4>
                            <small>{job.startDate} - {job.endDate ? job.endDate : 'Present'}</small>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

MiniTimeline.defaultProps = {
    jobs: []
}

MiniTimeline.proptypes = {
    title: string,
    jobs: arrayOf(
        shape({
            title: string,
            startDate: any,
            endDate: any
        })
    )
}

export default MiniTimeline;