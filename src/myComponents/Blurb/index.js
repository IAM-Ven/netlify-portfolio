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
            <h3>{title}</h3>
            <Content body={description} />
            <Icon />
        </React.Fragment>
    );
}

Blurb.propTypes = {
    title: string,
    description: string,
    Icon: any
};

export default Blurb
