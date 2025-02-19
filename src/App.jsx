import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Programs from './Programs'
import Title from './Title'
import About from './About'
import Campus from './Campus'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'

const App = () => {
  const[playState,setPlayState]=useState(false);
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className = "container">
    <Title subTitle="OUR PROGRAM" title='What we offer'/>

      <Programs/>
      <About setPlayState= {setPlayState}/>
      <Title subTitle="Gallery" title='Campus Photos'/>
<Campus/>
<Title subTitle="TESTIMONIALS" title='What our students say'/>
<Testimonials/>
<Title subTitle="Contact Us" title='Get In Touch'/>
<Contact/>
<Footer/>

      </div>
      <VideoPlayer  playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
