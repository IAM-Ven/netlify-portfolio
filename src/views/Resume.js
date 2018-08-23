import React from 'react'

import {Container, Row, Col} from 'reactstrap' 
import LazyImage from '../components/LazyImage'
import PageHeader from '../components/PageHeader'
import ResumeSection from '../myComponents/ResumeSection'

import './Resume.css'

export default ({ fields, experience, education, skills }) => {
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
                    <ResumeSection key={item.key} title={item.title} subTitle={item.position} startDate={item.startDate} endDate={item.endDate} image={item.image}>
                      {item.description}
                    </ResumeSection>
                  );
                })}
              </div>
              <h2 className="blockTitle">Education</h2>
              <div className="educationItems">
                {education.map((item)=>{
                  return (
                    <ResumeSection key={item.key} title={`${item.title}, ${item.course}`} subTitle={item.degree} startDate={item.startDate} endDate={item.endDate} image={item.image}>
                      {item.description}
                    </ResumeSection>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col className="p-0 midGrey" lg="3" md="4" sm="12">
              <h2 className="blockTitle px-5 pt-5">Skills</h2>
              <div className="skillItems">
                {skills.map((skill)=>{
                  return(
                    <div key={skill.title} className="skill m-5 px-5">
                      <LazyImage src={skill.image} alt={skill.title} className="mb-0" />
                      <h3 className="text-center blockTitle">{skill.title}</h3>
                    </div>
                  );
                })}
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
