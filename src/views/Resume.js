import React from 'react'

import {Container, Row, Col} from 'reactstrap' 
import PageHeader from '../components/PageHeader'
import './Resume.css'

export default ({ fields }) => {
  const { title, intro } = fields
  return (
    <div className='Resume'>
      <PageHeader
        title={title}
        subtitle={intro}
      />
      <Container fluid>
        <Row>
          <Col className="p-0" lg="9" md="8" sm="12">
            <div className="p-5">
              <h2 className="blockTitle">Experience</h2>
            </div>
          </Col>
          <Col className="p-0" lg="3" md="4" sm="12">
          <div className="p-5">
              <h2 className="blockTitle">Skills</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
