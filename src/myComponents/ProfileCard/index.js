import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap'
import { Download, Linkedin, Home, FileText, Briefcase } from 'react-feather'
import { NavLink} from 'react-router-dom'
import BackgroundImage from '../../components/BackgroundImage'
import './index.css'

const ProfileCard = ({
  fullName,
  title,
  displayImage,
  downloadLink,
  linkedInLink,
  className = ''
}) => {
  return (
    <Container fluid>
        <Row>
            <Col className="profileImage" xs="12" md="4" lg="3">
                <BackgroundImage src={displayImage} />
            </Col>
            <Col xs="12" md="8" lg="9">
                <Row className="p-0">
                    <Col className="p-0" sm="10">
                        <h1 className="full-name">{fullName}</h1>
                    </Col>
                    <Col className="p-0 lightGrey text-center download" sm="2">
                        <a className="icon" href="https://drive.google.com/file/d/1mOzRBbWxGTWG5YKrssUyhs1P0YOqvOHi/view">
                            <Download size={48} />
                        </a>
                    </Col>
                </Row>
                <Row className="p-0">
                    <Col className="p-0" sm="10">
                        <h2 className="title lightGrey">{title}</h2>
                    </Col>
                    <Col className="p-0 midGrey text-center linkedin" sm="2">
                        <a className="icon" href="https://www.linkedin.com/in/philip-tietjen-3a746851">
                            <Linkedin size={48} />
                        </a>
                    </Col>
                </Row>
                <Row className="p-0">
                    <Col sm="4" xs="4" className="p-0 text-center midDarkBlue">
                        <NavLink className="menu-item" to="/" exact>
                            <div className="icon">
                                <Home size={38} />
                                <h3 className="blockTitle">Home</h3>
                            </div>
                        </NavLink>
                    </Col>
                    <Col sm="4" xs="4" className="p-0 text-center blue">
                        <NavLink className="menu-item" to="/resume">
                            <div className="icon">
                                <FileText size={38} />
                                <h3 className="blockTitle">Resume</h3>
                            </div>
                        </NavLink>
                    </Col>
                    <Col sm="4" xs="4" className="p-0 text-center midLightBlue">
                        <NavLink className="menu-item" to="/projects" exact>
                            <div className="icon">
                                <Briefcase size={38} />
                                <h3 className="blockTitle">Projects</h3>
                            </div>
                        </NavLink>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

ProfileCard.propTypes = {
  fullName: PropTypes.string,
  title: PropTypes.string,
  displayImage: PropTypes.string,
  downloadLink: PropTypes.string,
  linkedInLink: PropTypes.string,
  className: PropTypes.string
}

export default ProfileCard
