import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
import axios from 'axios';

const YelpFetch = () => {
    function fetchRequest() {
    fetch('http:localhost:3001/yelp', {
        credentials: "include"
    })
      .then(response => response.json())
      .then(data => console.log(data))
}
return (
    <Card>
        <Card.Img variant="top" className="images" src="" />
          <Card.Body>
            <Card.Title>All Contractors</Card.Title>
              <Card.Text>
                <Button onClick = {() => fetchRequest()}> Get all
                </Button>
                    <div>
                      <h1>
                        Does it work
                      </h1>
                    </div>
              </Card.Text>
          </Card.Body>
      </Card>   
);
}
export default YelpFetch