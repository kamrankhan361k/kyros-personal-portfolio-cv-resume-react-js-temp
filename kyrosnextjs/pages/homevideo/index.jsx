import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax, Background } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/Hero';
import About from '../section/about';
import Blockquote from '../section/blockquotesub';
import Whatido from '../section/whatido';
import Gallery from '../section/gallerysub';
import Resume from '../section/resume';
import Counter from '../section/countersub';
import Blog from '../section/blogsub';
import Contact from '../section/contactsub';
import Footer from '../section/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .react-parallax-background-children {
    position: absolute;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

export default function Home() {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
      attemptPlay();
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 3000)
      }
    }, []);
  return (
    <>
    <Head>
      <title>KYROS</title>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <div className='preloader fadeOut'>
        <div className="mainpreloader">
          <span></span>
        </div>
      </div>
    </div>

    {/* MENU */}
    <div className="home">
      <header id="header-wrap">
        <Navbar />
      </header>

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax strength={300}>
          <Background className="custom-video">
              <video
                playsInline
                loop
                muted
                alt="All the devices"
                src="../video/local-video-1.mp4"
                ref={videoEl}
              />
          </Background>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about" className="pb-0">
        <About/>
        <Blockquote/>
      </section>

      {/* What I DO */}
      <section id="whatido">
        <Whatido/>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Resume */}
      <section id="resume" className="pb-0">
        <Resume/>
        <Counter/>
      </section>

      {/* Blog */}
      <section id="blog" className="pb-0">
        <Blog/>
      </section>

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>

      <div className="float-text">
          <div className="de_social-icons">
              <span className="buton"><i className="fa fa-facebook fa-lg"></i></span>
              <span className="buton"><i className="fa fa-twitter fa-lg"></i></span>
              <span className="buton"><i className="fa fa-instagram fa-lg"></i></span>
          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  )
}
