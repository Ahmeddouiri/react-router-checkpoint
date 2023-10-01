import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { Data } from '../../DATA';

function MovieList() {
 

  const [listofmovie, setListofmovie] = useState(Data);
  const [movietitle, setMovietitle] = useState("");
  const [movierate, setMovierate] = useState("");
  const [inputTile, setInputTitle] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputrate, setInputrate] = useState("");
  const [inputdescription, setInputdescription] = useState("");
  const [inputposterURL, setInputposterURL] = useState("");
  
  
  const add = () => {
    let url = inputposterURL.toString()
    let ratenew
    if(inputrate>10)
    { ratenew = 1}
    else{ ratenew = inputrate}
    const newMovie = {
      Title: inputTile,
      Year: inputYear,
      rate: ratenew,
      description: inputdescription,
      posterURL: url
    };
      console.log(newMovie)
    setListofmovie([...listofmovie, newMovie]);

    // Clear input fields
    setInputTitle('');
    setInputYear('');
    setInputrate('');
    setInputdescription('');
    setInputposterURL('');
  };



  return (
    <>

      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="align-self-center  w-50 p-3 mt-5  ">
            <Card.Body>
              <Card.Title>Add Movie</Card.Title>
              <Form.Control onChange={(e) => { setInputTitle(e.target.value) }} placeholder="Title" />
              <Form.Control onChange={(e) => { setInputYear(e.target.value) }} placeholder="Year " />
              <Form.Control onChange={(e) => { setInputrate(e.target.value) }} placeholder="rate" />
              <Form.Control onChange={(e) => { setInputdescription(e.target.value) }} placeholder="description" />
              <Form.Control onChange={(e) => { setInputposterURL(e.target.value) }} placeholder="posterURL" />
              <Button onClick={() => add()} >Add</Button>
            </Card.Body>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="align-self-center  w-50 p-3 mt-5  ">
            <Card.Body>
              <Card.Title>Search Fiter</Card.Title>
              <Form.Group className="mb-3">
                <Form.Label>Search with Title</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setMovietitle(e.target.value)
                  }
                  placeholder="Title"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Search By Rate </Form.Label>
                <Form.Control
                  onChange={(event) =>
                    setMovierate(event.target.value)
                  }
                  placeholder="Rate"
                />
              </Form.Group>

            </Card.Body>
          </Form>
        </Col>
      </Row>

      <Container>
        <Card.Body>
          <Card.Title className="mb-3 align-self-start" ><h2>Results</h2></Card.Title>
          <Row md={4}>
            {listofmovie.filter((movie) => movie.Title.toLowerCase().includes(movietitle
            .toLowerCase())&& movie.rate.toLowerCase().includes(movierate
              .toLowerCase())).map((movie, key) => (
              <MovieCard
                key={key}
                Title={movie.Title}
                Year={movie.Year}
                rate={movie.rate}
                description={movie.description}
                posterURL={movie.posterURL}
                id={movie.id}
              />
            ))}
                          

          </Row>
        </Card.Body>
      </Container>

    </>
  )
}

export default MovieList