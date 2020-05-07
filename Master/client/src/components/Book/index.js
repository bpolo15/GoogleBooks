//require dependencies that we need
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

//creating a funcitonal component called book and passing through the values title, subtitle, authors, link, description, image, and button


function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    //Will return one book
    //utalizing the row and column components 
    //constructing the book listItem
    //creating bootstrap structures
    //we are creating rows and columns with our compontents "Row" and "Col"
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* passing through the title and subtitle keys*/}
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {/*constructing author using prop information  */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/* the size is dictating how many columns our card will take up depending on how large our screen size will be*/}
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        {/* constructing description using prop information and creating an element */}
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}
//eporting component to be used elsewhere 
export default Book;
