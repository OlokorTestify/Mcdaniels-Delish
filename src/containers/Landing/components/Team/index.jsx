import React from 'react';

import Mercy from '../../../../assets/images/x.jpeg'
import Jane from '../../../../assets/images/ji.jpeg'
import Doe from '../../../../assets/images/jj.jpeg'
import John from '../../../../assets/images/lo.jpg'

import './index.scss';


const Team = () => (
    <>
        <section className='Team'>
            <h1>Our Team...</h1>
            <div className='team_members'>
                <div data-aos-offset="200"
                data-aos-delay="500"
                   data-aos-duration="50000" 
                   data-aos="fade-up">
                    <img className='imge' src={Mercy} alt='Mercy' />
                    <p>Mercy Daniels</p>
                </div>
                <div data-aos-offset="200"
                data-aos-delay="500"
                   data-aos-duration="50000" 
                   data-aos="fade-up">
                    <img className='imge' src={Jane} alt='Jane' />
                    <p>Jane Doe</p>
                </div>
                <div data-aos-offset="200"
                data-aos-delay="500"
                   data-aos-duration="50000" 
                   data-aos="fade-up">
                    <img className='imge' src={Doe} alt='Doe' />
                    <p>Jane Doe</p>
                </div>
                <div data-aos-offset="200"
                data-aos-delay="500"
                   data-aos-duration="50000" 
                   data-aos="fade-up">
                    <img className='imge' src={John} alt='John' />
                    <p>John Doe</p>
                </div>
            </div>
        </section>
    </>
)

export default Team;