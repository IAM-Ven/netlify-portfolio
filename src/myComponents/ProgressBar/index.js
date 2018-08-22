import React from 'react';
import {string, number} from 'prop-types';
import {Progress} from 'reactstrap';

const ProgressBar = ({
    title,
    subTitle,
    fill
}) => {
    return(
        <div className="ProgressBar my-4">
            {title && (
                <h4 className="blockTitle">
                    {title}
                    {subTitle && (
                        <small><em> - {subTitle}</em></small>
                    )}
                </h4>
            )}
            
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