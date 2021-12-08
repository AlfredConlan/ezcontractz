import React from "react";
import { Github, Linkedin, EnvelopeFill } from 'react-bootstrap-icons';

export default function AboutUs() {
    return (
        <div class="container">
            <div class="block-heading">
                <p class=" h1 text-primary text-center p-4 ">About Us</p>
                <p class=" h5 text-center p-4 mb-5">We are a team of full-stack web developers working on a way to make finding contractors and managing work needed for your home a breeze!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="card text-center clean-card ratio-1x1"><img class="card-img-top w-100 d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e1dL4l1oicfd7dWUYumTL8cTBsNrLRLjYQ&usqp=CAU" />
                        <div class="card-body info">
                            <h4 class="card-title">Jake Jenkins</h4>
                            <p class="card-text">Full-Stack Web Developer with DigitalCrafts</p>
                            <EnvelopeFill size={40} className="p-1" />
                            <Github size={40} className="p-1" />
                            <Linkedin size={36} className="p-1" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card text-center clean-card ratio-1x1"><img class="card-img-top w-100 d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e1dL4l1oicfd7dWUYumTL8cTBsNrLRLjYQ&usqp=CAU" />
                        <div class="card-body info">
                            <h4 class="card-title">Carmen Kesho</h4>
                            <p class="card-text">Full-Stack Web Developer with DigitalCrafts</p>
                            <EnvelopeFill size={40} className="p-1" />
                            <Github size={40} className="p-1" />
                            <Linkedin size={36} className="p-1" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card text-center clean-card ratio-1x1"><img class="card-img-top w-100 d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e1dL4l1oicfd7dWUYumTL8cTBsNrLRLjYQ&usqp=CAU" />
                        <div class="card-body info">
                            <h4 class="card-title">Al Conlan</h4>
                            <p class="card-text">Full-Stack Web Developer with DigitalCrafts</p>
                            <EnvelopeFill size={40} className="p-1" />
                            <Github size={40} className="p-1" />
                            <Linkedin size={36} className="p-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}