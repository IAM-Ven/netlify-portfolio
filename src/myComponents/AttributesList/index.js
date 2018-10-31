import React from 'react'
import {string, object} from 'prop-types'
import { Row, Col} from 'reactstrap'
import './index.css'

const capitalLetterRegex = /[A-Z]/g;
const AttributesList = ({
    className,
    attributes
}) => {
    return(
        <Row className={`attributesList ${className}`}>
            {Object.entries(attributes).map(([attribute, value])=>{
                attribute = attribute.replace(capitalLetterRegex, (match) => ` ${match}`);

                return(
                    <Col key={attribute} className="p-0 attributeContainer" sm="6" xs="12">
                        <div className="p-5 attribute">
                            <h4 className="blockTitle">{attribute}</h4>
                            <p><small>{value}</small></p>
                        </div>
                    </Col>
            )})}
        </Row>
    );
}
AttributesList.defaultProps = {
    className: ""
};

AttributesList.propTypes = {
    className: string,
    attributes: object
};

export default AttributesList
