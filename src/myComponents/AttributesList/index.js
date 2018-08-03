import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col} from 'reactstrap'
import './index.css'

const capitalLetterRegex = /[A-Z]/g;
const AttributesList = ({
    attributes
}) => {
    return(
        <Row className="attributesList">
            {Object.entries(attributes).map(([attribute, value])=>{
                attribute = attribute.replace(capitalLetterRegex, (match) => ` ${match}`);

                return(
                    <Col key={attribute} className="p-0 attributeContainer" sm="6" xs="12">
                        <div className="p-5 attribute">
                            <h4>{attribute}</h4>
                            <p><small>{value}</small></p>
                        </div>
                    </Col>
            )})}
        </Row>
    );
}

AttributesList.propTypes = {
    attributes: PropTypes.object
};

export default AttributesList
