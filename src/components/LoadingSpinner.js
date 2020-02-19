import React from 'react';
import { Row, Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return(
    <Row className="top-margin justify-content-md-center">
      <Spinner animation="grow">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );
}

export default LoadingSpinner;