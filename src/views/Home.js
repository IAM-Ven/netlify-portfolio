import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import AttributesList from '../myComponents/AttributesList'
import Blurb from '../myComponents/Blurb'
import {Code, Edit, Trash} from 'react-feather'
import './Home.css'

export default ({ fields }) => {
  const { about, attributes, body} = fields

  return (
    <main className='Home'>
        <Container fluid>
            <Row>
                <Col className="p-0" lg="3" md="4" sm="12">
                    <AttributesList className="m-0" attributes={attributes} />
                </Col>
                <Col className="p-0" lg="9" md="8" sm="12">
                    <div className="p-5">
                        <h2>{about.title}</h2>
                        <h4>{about.intro}</h4>
                        <Row className="pt-4">
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
        </Container>
    </main>
  )
}
