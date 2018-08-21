import React from 'react';
import {string, number} from 'prop-types';
import {Progress} from 'reactstrap';

const ProgressBar = ({
    title,
    fill
}) => {
    return(
        <div className="ProgressBar my-3">
            <h4 className="blockTitle">{title}</h4>
            <Progress value={fill} />
        </div>  
    );
}

ProgressBar.propTypes = {
    title: string,
    fill: number
}

ProgressBar.defaultProps = {
    title: "",
    fill: 0
}

export default ProgressBar