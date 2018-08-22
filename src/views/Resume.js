import React from 'react'

import moment from 'moment';
import {Container, Row, Col} from 'reactstrap' 
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './Resume.css'

export default ({ fields, experience }) => {
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
              <div className="experienceItems">
                {experience.map((item)=>{
                  return (
                    <div className="experienceItem my-5">
                      <h4 className="blockTitle">{item.title} - <em>{item.position}</em></h4>
                      <h5>{moment(item.startDate).format('MMM YYYY')} - {item.endDate ? moment(item.endDate).format('MMM YYYY') : "Present"}</h5>
                      <Content source={item.description}/>
                    </div>
                  );
                })}
              </div>
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
