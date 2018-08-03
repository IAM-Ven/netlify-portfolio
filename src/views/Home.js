import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Content from '../components/Content'
import AttributesList from '../myComponents/AttributesList'
import './Home.css'

export default ({ fields }) => {
  const { about, attributes, body} = fields
  return (
    <main className='Home'>
        <Container fluid>
            <Row>
                <Col className="p-0" lg="3" md="4" sm="12">
                    <AttributesList attributes={attributes} />
                </Col>
                <Col className="p-0" lg="9" md="8" sm="12">
                    <div className="p-5">
                        <h2>{about.title}</h2>
                        <h4>{about.intro}</h4>
                        <Content source={body} />
                    </div>
                </Col>
            </Row>
        </Container>
    </main>
  )
}
