import React from 'react';
import Contractor from './Contractor';
import {Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";

const SearchBar = () => {
    //Setting the state of the search button using hooks
       
    return (
        <div className='SearchBar'>
  
                <div className='welcome_search'>  
                <Form>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Category
      </Form.Label>
      <InputGroup className="mb-2">
      <InputGroup.Text>Category</InputGroup.Text>
      <FormControl id="inlineFormInputGroup" placeholder="Plumber" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Location
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>Zip Code</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="30080" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>       
         
            
                </div>                  
        </div>
    ) 
}
export default SearchBar;
