//Here we are requiring our dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//Creating a class component called Saved
class Saved extends Component {
  //We are setting out state and starting with a books key linked to an empty array
  state = {
    books: []
  };
//This waits for the page to render then will call the getSavedBooks function 
  componentDidMount() {
    this.getSavedBooks();
  }
//getSavedBooks is our api call to our saved books information
  getSavedBooks = () => {
    API.getSavedBooks()
    //If the call is successful we then set our state with the data that was retreived 
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //if the call was unsuccessful we will console.log the error message
      .catch(err => console.log(err));
  };
//This funciton will handle the book delete and it will take the id from the book you want to delete and pass it through the delete book API call and then it will re render the page with the remaining information(books)
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
//Below we are rendering the information on the page
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/*This is setting up a jumbotron using our junbotron componenet and adding new text for the specific page */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/*Here is where we will display our saved books information that we are getting from our API call */}
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
//Exporting our Saved component
export default Saved;
