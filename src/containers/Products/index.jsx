import React from 'react';

import Navbar from './Navbar'
import Contact from '../Landing/components/Contact'
import bg from '../../assets/images/bg.jpg'
import './index.scss'
import ScrollToTop from '../../components/scrollToTop';

const items = [{
  id: 1,
  img: 'https://i2.wp.com/www.myactivekitchen.com/wp-content/uploads/2015/06/efo-riro-2.jpg?fit=4000%2C2663&ssl=1',
  title: "Efo Riro",
  small: '5,000',
  medium: '7,000',
  large: '10,000'
},
{
  id: 2,
  img: 'https://i.ytimg.com/vi/9VFPv-h9Rb8/maxresdefault.jpg',
  title: "Banga Soup",
  small: '5,000',
  medium: '7,000',
  large: '10,000'
},
{
  id: 3,
  img: 'https://dooneyskitchen.com/wp-content/uploads/2014/11/egusi.jpg',
  title: "Egusi soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 4,
  img: 'https://glowskos.com/wp-content/uploads/2018/04/edikang-ikong-600x600.jpg',
  title: "Edikang Ikang Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 5,
  img: 'https://img-global.cpcdn.com/recipes/0680bb5c2013d08d/751x532cq70/afang-soup-recipe-main-photo.jpg',
  title: "Afang Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 6,
  img: 'https://allnigerianfoods.com/wp-content/uploads/bitter-leave-soup-recipe-500x433.jpg',
  title: "Bitterleaf Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 7,
  img: "https://elistatus.com/wp-content/uploads/2018/11/images-13.jpeg",
  title: "Okazi Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 8,
  img: 'https://ocdn.eu/images/pulscms/NjA7MDA_/401815b4fddc18695c3563220b473dcb.jpg',
  title: "Okro Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 9,
  img: 'https://estheradeniyi.com/wp-content/uploads/2018/06/Ogbono-Soup.jpg',
  title: "Ogbono Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 10,
  img: 'https://i.ytimg.com/vi/2QMgm6H3jXA/maxresdefault.jpg',
  title: "Ofe Nsala Soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 11,
  img: 'https://img-global.cpcdn.com/recipes/3fe9dbd2b8531d7d/1200x630cq70/photo.jpg',
  title: "Chicken stew",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 12,
  img: 'https://img-global.cpcdn.com/recipes/a8f05f620ae3bfed/751x532cq70/oha-soup-recipe-main-photo.jpg',
  title: "Oha soup",
  small: '5,000',
  medium: '7,000',
  large: '8,000'
},
{
  id: 13,
  img: 'https://www.davinadiaries.com/wp-content/uploads/2015/11/Vegetable-Yam-porridge.jpg',
  title: "Yam Porridge"
},
{
  id: 14,
  img: 'https://nigeriandiet.com/wp-content/uploads/2018/08/how-to-make-nigerian-pepper-soup.png',
  title: "Pepper Soup"
},
{
  id: 15,
  img: 'https://guardian.ng/wp-content/uploads/2017/07/moimoi-14-1024x672-e1500639684201.jpg',
  title: "Moin Moin"
}
]

const Products = () => {

  return (
    <>
      <ScrollToTop />
      <section className='menu_page'>
        <img src={bg} alt='bg' className='bg' />
        <Navbar />
        <div>
          <h1>Delish Menu</h1>
        </div>
      </section>
      <section className='menu_content'>
        <span className='sparkle a'></span>
        <span className='sparkle b'></span>
        <span className='sparkle c'></span>
        <span className='sparkle d'></span>
        <span className='sparkle e'></span>
        <span className='sparkle f'></span>
        <span className='sparkle g'></span>
        <span className='sparkle h'></span>
        <span className='sparkle i'></span>
        <span className='sparkle j'></span>
        <span className='sparkle k'></span>
        <span className='sparkle l'></span>
        <div className='circle a1' />
        <div className='circle b1' />


        <ul>
          <li>Our Standard Large Pot comes with 18 pieces of meat, Dryfish, Stockfish, and Kpomo</li>
          <li>Our Standard Medium Pot comes with 14 pieces of meat, Dryfish, Stockfish, and Kpomo</li>
          <li>Our Standard Small Pot comes with 10 pieces of meat, Dryfish,  Stockfish, and Kpomo</li>

          <p style={{ marginTop: '4rem', fontSize: '1.2rem' }}>Prices are subject to change without prior notice, depending on existing market prevalence</p>

        </ul>
        <div className='card_container'>

          {items.map((item) => (
            <div className="blog_card" key={item.id}>
              <div className="img_container">
                <img src={`${item.img}`} alt={"blog_pic"} />
              </div>
              <div className="post">
                <h3 className="title">{item.title}</h3>
                {item.small && <p className="author">
                  <span>small</span> <span>medium</span> <span>large</span>
                </p>}
                <p className="author">
                  <span>{item.small} </span> <span>{item.medium}</span> <span>{item.large}</span>
                </p>
                <p className="details">( NGN )</p>
              </div>
            </div>
          ))}

        </div>
        <div className='other_containers'>
          <p>Other items includes Garden egg Sauce,
          Jollof Rice (with Chicken),
          Jollof Fiesta (with chicken, sausages, gizzard & shrimps),
          Fried Rice (with chicken),
          Vegetable Sauce ( with shrimps, diced beef, Smoked Fish, dry fish),
          Ofada Stew,
               Ukodo (Yam peppersoup with unripe plantain,goatmeat,dryfish)</p>
        </div>
      </section>
      <Contact />
    </>
  )
}


export default Products