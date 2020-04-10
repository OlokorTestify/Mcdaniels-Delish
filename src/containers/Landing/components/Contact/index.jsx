import React from 'react';

import Map from '../Map'

import email from '../../../../assets/images/email.jpg'
import call from '../../../../assets/images/call.jpg'
import whatsapp from '../../../../assets/images/whatsapp.svg.webp'


import './index.scss'


const Contact = () => {

    return (
        <>
            <section className='contact' id='Contact'>
                <h1>Contact Us</h1>
                <div className='contact_container'>
                    <div className='media'>
                        <div>
                            <img src={email} alt='email' />
                            <span>danielsmercy4@gmail.com</span>
                        </div>
                        <div>
                            <img src={call} alt='email' />
                            <span>07061630054</span>
                        </div>
                        <div>
                            <img src={whatsapp} alt='email' />
                            <span>080220822198</span>
                        </div>
                    </div>
                    <div className='map'>
                        <Map />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Contact