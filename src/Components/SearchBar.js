import React, {useState} from 'react';
import Contractor from './Contractor';
import {Row, Col, Form, Button, InputGroup, FormControl, Card } from "react-bootstrap";
import './Grid.css';

export default function SearchBar() {
  const [businessInfo,setBusinessInfo] = useState([]);
  const [location,setLocation] = useState("");
  const [categories,setCategories] = useState ("");
       
//1. need to make the category a drop down selector - complete
//2. need to make the default value "select category"
//3. need to pass the input from the user to the get the results (i.e. need to make the route dynamic) - complete
//Note: Typically, a form refreshes on submit, so you have to put in the prevent default so it doesn't. Line 26)
    
    return (
        <div className='SearchBar'> 
        <h6>Select the Cateogry and enter your Zip Code to find a contractor in your area.</h6>
        <br></br>
          <Form onSubmit = { (e) => e.preventDefault()} > 
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Category
                </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Category</InputGroup.Text>
                    <Form.Select onChange = {
                      (e) => {
                        setCategories(e.target.value);
                      }
                            }className="me-sm-2" input id="alias">
                                    <option value="null">Select Category</option> 
                                    <option value="carpet">Carpet</option>
                                    <option value="cleaners">Cleaning</option>
                                    <option value="electricians">Electricians</option>
                                    <option value="gutters">Gutter</option>
                                    <option value="hvac">HVAC Repair</option>
                                    <option value="installation">Installation</option>
                                    <option value="lawn_care">Lawn Care</option>
                                    <option value="painters">Painters</option>  
                                    <option value="pest_control">Pest Control</option>  
                                    <option value="plumbers">Plumbers</option>  
                                    <option value="roofing">Roofing</option> 
                                    <option value="windows">Window Services</option>   
                    </Form.Select>
                      {/* <FormControl id="inlineFormInputGroup" placeholder="Plumbing" /> */}
                  </InputGroup>
                     </Col>
                     <Col xs="auto">
                          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Location
                              </Form.Label>
                                <InputGroup className="mb-2">
                                  <InputGroup.Text>Zip Code</InputGroup.Text>
                                    <FormControl onChange = {
                                      (e) => {
                                        setLocation(e.target.value)
                                      }
                                    } input id="zipcode" placeholder="30080"/>
                   </InputGroup>
                     </Col>
                     <Col xs="auto">
                       <Button onClick = { () => { 
                         fetch('http://localhost:3001/yelp', {
                           method: 'POST',
                           credentials: 'include',
                           headers: {
                             'Content-Type': 'application/json',
                             },
                             body: JSON.stringify({
                               categories, location
                             }),
                             })
                             .then((res) => res.json()) 
                             .then((data) => {
                             if (data.error) {
                             alert(data.error);
                             } else {
                             console.log(data)
                             }});                                       

                           // .then(function (response) {
                           //   setBusinessInfo(response.data);
                           }}
                           type="submit" className="mb-2">Search
                       </Button>
                     </Col>
            </Row>
          </Form>
        </div>                   
    );
}
