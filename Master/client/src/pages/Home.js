//Requiring our dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//We are creating a class component called Home
class Home extends Component {
  //Here we are declaring the state with the values books, which is set to an empty array, q, which is an empty string, and a message that is "Search For A Book To Begin"
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };
//This is our handleInputChange functino that has been initialized on different click events. This will take the name and value of the event target and reset the values in the state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
//get books is a function that does an API call utalizing the q value which is user input and will search books based on this input
  getBooks = () => {
    API.getBooks(this.state.q)
    //after the API call we are setting the state information with the new data
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //if there is an error we are not going to add the book information to the array but we will give them a new message saying "No new books found, try a differenty query"
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
//handleFormSubmit is our onclick event listener and after it is fired off we prevent the page from loading and call the getBooks function with is our API call
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };
  //handleBookSave is a function that sets our book information into a new variable and then saves it to our API
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);
//We are making a put method for our API which is saving the information listed below
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
      //after we post our new information to our API, we are then recalling the api through the funciton getBooks so we can render the newly saved data
    }).then(() => this.getBooks());
  };
//Here we are rendering all our visual information utalizing the components that we set elsewhere. We are using Container, Row, Col, Jumbotron, and Card
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/*Here we are setting up our Jumbotron for our home page with the text that is adding in below. We utalize our jumbotron component which is our template and finish filling out the information below */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              {/*Here we are filling out or form information and using our Form component that we set up earlier. We are also attaching our event listeners */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          {/*Below we are setting up our cards for our results. It will use this outline to display our book information that we are getting from our API call */}
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    //using our book component to display the information that we got from our API call
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          {/*Here is a save button that will be used if we want to save a book. This will cire off our handleBookSave that we declared above. The end result will then save the selected book and add it to our save page */}
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
//Here we are exporting our Home component
export default Home;
