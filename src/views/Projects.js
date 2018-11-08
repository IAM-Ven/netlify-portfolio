import React from 'react'
import {Container, Row} from 'reactstrap'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import { Frame } from '../myComponents/Frame'
import './Projects.css'

export default ({
  fields,
  projects
}) => {
  const { title, intro } = fields

  return (
    <main className='Projects'>
      <PageHeader
        title={title}
        subtitle={intro}
      />
      <Container fluid>
        {projects.map((project, index)=>{
          return (
            <Row key={`project-${index}`}>
              <div className="p-5">
                <div className="ScreenFrames">
                  <Frame container='desktop' src={project.desktopImage} />
                  <Frame container='tablet' src={project.tabletImage} />
                  <Frame container='phone' src={project.phoneImage} />
                </div>
                <h2>{project.title}</h2>
                <Content source={project.detail} />
              </div>
            </Row>
          );
        })}
      </Container>
    </main>
  )
}
