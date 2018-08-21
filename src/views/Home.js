import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import AttributesList from '../myComponents/AttributesList'
import Blurb from '../myComponents/Blurb'
import ProgressBar from '../myComponents/ProgressBar'
import MiniTimeline from '../myComponents/MiniTimeline'
import {Code, Edit, Trash} from 'react-feather'
import './Home.css'

export default ({ fields, featuredEmployment, featuredSkills }) => {
  const { about, attributes} = fields

  return (
    <main className='Home'>
        <Container fluid>
            <Row>
                <Col className="p-0" lg="3" md="4" sm="12">
                    <AttributesList className="m-0" attributes={attributes} />
                </Col>
                <Col className="p-0" lg="9" md="8" sm="12">
                    <div className="p-5">
                        <h2 className="blockTitle">{about.title}</h2>
                        <h4>{about.intro}</h4>
                        <Row className="pt-5">
                            <Col md="4" sm="12" className="text-center">
                                <Blurb
                                    title={about["blurb-1"].title}
                                    description={about["blurb-1"].description}
                                    Icon={Code}
                                />
                            </Col>
                            <Col md="4" sm="12" className="text-center">
                                <Blurb
                                    title={about["blurb-2"].title}
                                    description={about["blurb-2"].description}
                                    Icon={Edit}
                                />
                            </Col>
                            <Col md="4" sm="12" className="text-center">
                                <Blurb
                                    title={about["blurb-3"].title}
                                    description={about["blurb-3"].description}
                                    Icon={Trash}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="p-0 midGrey" lg="3" md="4" sm="12">
                    <div className="p-5">
                        <MiniTimeline title="Employment" jobs={featuredEmployment} />
                    </div>

                </Col>
                <Col className="p-0 lightGrey" lg="9" md="8" sm="12">
                    <div className="p-5">
                        <h2 className="blockTitle">Professional Skills</h2>
                        <div>
                            {featuredSkills.map(({name, title, yearsOfExperience ,skillLevel})=>{
                                return <ProgressBar key={name} title={title} subTitle={`${yearsOfExperience} years of experience`} fill={skillLevel} />;
                            })}
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </main>
  )
}
