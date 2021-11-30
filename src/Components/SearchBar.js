import React from 'react';
import Contractor from './Contractor';
import {Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import './Grid.css';

const SearchBar = () => {
//need to make the category a drop down selector
//need to pass the input from the user to the get
       
    return (
        <div className='SearchBar'> 
        <h6>Select the Cateogry and enter your Zip Code to find a contractor in your area.</h6>
        <br></br>
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
                  Search
                </Button>
              </Col>
            </Row>
          </Form>       
        </div>                  
    ) 
}
export default SearchBar;
