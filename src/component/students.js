import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const cardInfo = [
  { image: "s1.png", name: "Mike", gpa: 3.8 },
  { image: "s2.png", name: "Manal", gpa: 3.6 },
  { image: "s3.png", name: "Moe", gpa: 3.2 },
  { image: "s4.png", name: "Mary", gpa: 2.6 },
];

function students() {
  return (
    <div>
      Student here!
      <div className="grid-container">
        <div class="grid-item">
          <img src={require("./s1.png")}></img>
          <h1></h1>
        </div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
      </div>
      {/* card style that throws hook errors: <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default students;
