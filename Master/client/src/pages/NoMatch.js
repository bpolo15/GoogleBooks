//Requiring our dependencies
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//We are declaring a functional component called NoMatch
function NoMatch() {
  //This component is utalizing the Container, Row, Col, and Jumbotron componenets. It will dispaly a page saying 404 Page Not Found if there is an error with rendering a page
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
//Exporting the NoMatch component
export default NoMatch;
