import React from 'react';
import {Container, Row} from 'reactstrap';
import { MapPin, Smartphone, Mail } from 'react-feather'

import './Footer.css';

export default ({ fields }) => {
    const { address, phone, email } = fields;

    return(
        <footer className='Footer'>
            <Container fluid className="px-5">
                <Row className="Contact">
                    <a><MapPin/> {address}</a>
                    <a><Mail/> {email}</a>
                    <a><Smartphone/> {phone}</a>
                </Row>    
            </Container>
            <Container fluid className="">
                <Row className="Disclaimer">
                    <span>Created in React & React Router</span>
                    <span>Designed from scratch inspired by <a href="https://neuethemes.net/preview/gridus/v2.2.2">Gridus</a></span>
                    <span>© Copyright Philip Tietjen 2018</span>
                </Row>
            </Container>
        </footer>
    )
};
