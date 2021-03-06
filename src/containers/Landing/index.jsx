import React from 'react'

import scrollToTop from '../../components/scrollToTop'
import Header from './components/Header'
import What from './components/What'
import Why from './components/Why'
import Services from './components/Services/index'
import Team from './components/Team/index'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Menu from './components/Menu'



const Landing = (props) => {

    return (
        <>
        <scrollToTop/>
            <Header />
            <What />
            <Why />
            <Services />
            <Team />
            <Gallery />
            <Menu />
            <Contact />
        </>
    )
}

export default Landing