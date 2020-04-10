import React from 'react';

import bg from '../../../../assets/images/bg.jpg'

import './index.scss'

const Services = () => (
    <>
        <section className='service' id='About'>
            <img src={bg} alt='bg' className='bg' />
            <h1>Our Services..</h1>
            <div className='service2'>
                <div className='service-sub'>
                    <img className='img' src='https://images.all-free-download.com/images/graphiclarge/food_delivery_banner_design_with_van_carrying_food_6825487.jpg' alt='Truck' />
                    <h2>Delivery</h2>
                    <p>We are a group of highly trained and dedicated seasoned professionals who believe that cooking is an art and should be taken as one. </p>
                </div>
                <div className='service-sub'>
                    <img className='img' src='https://www.freevector.com/uploads/vector/preview/25061/Catering1.jpg' alt='Truck' />
                    <h2>Event Catering</h2>
                    <p>We cater to social events such as weddings, birthdays and much more. We also provide OFFICE LUNCH delivery. We believe even at work, you should eat well, right and healthy.</p>
                </div>

                <div className='service-sub'>
                    <img className='img' src='https://cdn1.vectorstock.com/i/1000x1000/88/45/young-woman-with-ladle-cooking-soup-housewife-vector-18578845.jpg' alt='Truck' />
                    <h2>Customized</h2>
                    <p>You are in charge! You simply tell us which items you’d like and the services you want us to provide </p>
                </div>
            </div>


        </section>
    </>
)



export default Services