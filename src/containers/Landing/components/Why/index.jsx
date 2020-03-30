import React from 'react'

import img1 from '../../../../assets/images/lady-on-balcony-large.jfif'

import './index.scss'

const Why = () => {

    return (
        <>
            <section className='why' id='Why'>
                <div className='big_circle'></div>
                <div className='small_circle'></div>
                <div className='item pic'>
                    <img src={img1} alt='balcony' />
                </div>
                <div className='item content'>

                    <h1>Why Us</h1>

                    <div className='text'>
                        <div>
                            <h2>1. We are Customer driven</h2>
                            <p>
                                We are very devoted to giving personal attention to every details of our customer’s requirement, no matter how small. We offer impeccable cooking; Tailored to Your taste and preference, hygienically prepared, properly sealed and delivered conveniently to your doorstep
                        </p>
                        </div>
                        <div>
                            <h2>2. We are Affordable</h2>
                            <p>
                                We retain the capacity to operate within your budget.We promote transparency in our work flow and expenses generated as pertaining your services.,by making out cost reports concise and devoid of ambiguity.
                        </p>
                        </div>
                        <div>
                            <h2>3. We are Health-Conscious</h2>
                            <p>
                                We retain the capacity to operate within your budget.We promote transparency in our work flow and expenses generated as pertaining your services.,by making out cost reports concise and devoid of ambiguity.
                        </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Why