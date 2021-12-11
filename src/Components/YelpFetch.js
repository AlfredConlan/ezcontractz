import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const YelpFetch = () => {
  function fetchRequest() {
    fetch("https://ezcontractz.herokuapp.com:3001/yelp", {
      //had to delete the url and write it again
      // credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // const YelpFetch = () => {
  //     function axiosRequest() {
  //     fetch('https://ezcontractz.herokuapp.com:3001/yelp', {
  //         // credentials: "include"
  //     })
  //       .then(async response =>
  //             {
  //               try {
  //                 const data = await (response)
  //                 console.log ('response data?', data)
  //               } catch (error) {
  //                 console.log('This the error is happening')
  //                 console.error(error)
  //               }
  //             })
  //           }
  return (
    <Card>
      <Card.Img variant="top" className="images" src="" />
      <Card.Body>
        <Card.Title>All Contractors</Card.Title>
        <Card.Text>
          <Button onClick={() => fetchRequest()}> Get all</Button>
          <div>
            <h1>Does it work</h1>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default YelpFetch;
