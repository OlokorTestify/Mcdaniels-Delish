import React from 'react';

import Truck from '../../../../assets/images/truck.png'

import './index.scss'

const Services = () => (
    <>
    <section className='service'>
        <h1>Our Services..</h1>
        <div className='service2'>
        <div className='service-sub'>
            <div><img className='img1' src={Truck} alt='Truck' /></div>
            <h2>Delivery</h2>
            <p>We are a group of highly trained and dedicated seasoned professionals who<br></br> who believe that cooking is an art and <br></br>should be taken as one. </p>
        </div>         
        <div className='service-sub'> 
        <img className='img' src={Truck} alt='Truck' />
            <h2>Delivery</h2>
            <p>We are a group of highly trained and dedicated seasoned professionals who<br></br> who believe that cooking is an art and <br></br>should be taken as one. </p>
        </div>       
       
        <div className='service-sub'>
            <img className='img' src={Truck} alt='Truck' />
            <h2>Delivery</h2>
            <p>We are a group of highly trained and dedicated seasoned professionals who<br></br> who believe that cooking is an art and <br></br>should be taken as one. </p>
        </div>
        </div>
     

    </section>
    </>
)



export default Services