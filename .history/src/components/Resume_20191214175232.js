import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';

export default () => {

  return (
    <Row id="resume">
        <Col lg="6">
            <h2>Expérience</h2>
            
        </Col>

        <Col lg="6">
            <h2>Compétences</h2>
        </Col>
    </Row>
  );
}
