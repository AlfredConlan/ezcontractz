import {useState, useEffect} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row }from "react-bootstrap";
import {Button} from "react-bootstrap";
import SearchBar from './SearchBar';

// import axios from 'axios';
// import SearchFunction from './SearchFunction';

//need to replace the array with an api call
//need to add this + searchBar to another component to create the search page
const Contractor = () =>{  
    const cardInfo = [
      { name: "me", email: "test", phone: "test", address: "test"},
      { name: "and", email: "test", phone: "test", address: "test"},
      { name: "you", email: "test", phone: "test", address: "test"},
      { name: "your ", email: "test", phone: "test", address: "test"},
      { name: "momma", email: "test", phone: "test", address: "test"},
      { name: "and", email: "test", phone: "test", address: "test"},
    ];
//defines card layout
const renderCard = (card, index) => {            
  return (
    <div className = "contractorCard">
      <Card style={{ width: '15rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title><h6>card.title</h6></Card.Title>
              <Card.Text><h6>card.text</h6></Card.Text>
                <Button variant="primary">Assign Contractor</Button>
          </Card.Body>
      </Card>
  </div>
);
};
//maps through results to dynamically render Contractor 
return <div className = "contractorGrid">{cardInfo.map(renderCard)}</div>

}

export default Contractor