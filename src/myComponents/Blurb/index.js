import React from 'react'
import {string, any} from 'prop-types'
import Content from '../../components/Content'

const Blurb = ({
    title,
    description,
    Icon
}) => {
    return(
        <React.Fragment>
            <Icon />
            <h3>{title}</h3>
            <Content source={description} />
        </React.Fragment>
    );
}

Blurb.propTypes = {
    title: string,
    description: string,
    Icon: any
};

export default Blurb
