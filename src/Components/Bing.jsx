import {useState, useEffect} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import $ from 'jquery';
import axios from 'axios';
// import SearchFunction from './SearchFunction';

const Bing = () => {
function contractorSearch () {
const options = {
  method: 'GET',
  url: 'https://bing-entity-search.p.rapidapi.com/entities',
  params: {q: 'Georgia + Contractors', mkt: 'en-us'},
  headers: {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-entity-search.p.rapidapi.com',
    'x-rapidapi-key': '8eecdd641fmsh77bc9134b1d5a38p10b5cfjsn77d3c6df5328'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

return(
    <Card>
        <Card.Img variant="top" className="images" src="" />
          <Card.Body>
            <Card.Title>All Contractors</Card.Title>
              <Card.Text>
                <Button onClick = {() => contractorSearch()}> Get all
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

export default Bing 
