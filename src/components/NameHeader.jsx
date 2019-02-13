import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NameHeader = () => {
    return(
      <Row>
          <Col id="name" className="page-header text-center" md={12}>
              <h1>Mike Cardillo</h1>
          </Col>
      </Row>
    )
};

export default NameHeader;