import React from 'react'
import { Image } from 'react-bootstrap'
import ububake from '../images/ububake3.png'

function AboutScreen() {
    return (
        <>
            <div id="section">    
                <div id="container">
                    <div className="content-section">
                        <div id="title">
                            <h1>About Us</h1>
                        </div>
                        <div id="content">
                            <h3>UBU BAKE</h3>
                            <p>UBU BAKE offers a homestyle Bakery experience in the Country.
                                We take pride in our natural ingredients for our Bread and Pastry. Our Vision is to create upscale, quick-delivery service with a focus on simple and satisfying Dessert and Baked goods. 
                            </p>
                            <p>
                            The goal of Ubabake Bakery Shop is to make our shop to be known in all parts of the Philippines so that our customers can enjoy  the best tasting bread and pastries of Ubabake Bakery Shop. With the help of our trustworthy employees and beloved customers, we will make sure that Ububake Bakery Shop will have our own Branches across the Philippines.
                            </p>
                        </div>
                        <Image id='ububake' src={ububake} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutScreen
