import React from 'react'
import {string} from 'prop-types'

import moment from 'moment';
import Content from '../../components/Content'
import LazyImage from '../../components/LazyImage';
import './index.css';

const ResumeSection = ({
    title,
    subTitle,
    startDate,
    endDate,
    image,
    children
}) => {
    return(
        <div className="ResumeSection my-5">
            <LazyImage src={image} alt={title} />
            <h4 className="blockTitle">{title} - <em>{subTitle}</em></h4>
            <h5>{moment(startDate).format('MMM YYYY')} - {endDate ? moment(endDate).format('MMM YYYY') : "Present"}</h5>
            <Content source={children} />
        </div>
    );
};

ResumeSection.propTypes = {
    title: string,
    subTitle: string,
    startDate: string,
    endDate: string,
    children: string
};

export default ResumeSection