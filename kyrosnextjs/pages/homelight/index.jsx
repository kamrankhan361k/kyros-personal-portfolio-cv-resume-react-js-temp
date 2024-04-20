import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/Hero';
import About from '../section/about';
import Blockquote from '../section/blockquotesublight';
import Whatido from '../section/whatido';
import Gallery from '../section/gallerysub';
import Resume from '../section/resume';
import Counter from '../section/countersublight';
import Blog from '../section/blogsub';
import Contact from '../section/contactsublight';
import Footer from '../section/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../img/background/l1.jpg";

const GlobalStyles = createGlobalStyle`
  body, section {
        background-color: #fff;
    }
  #mainpreloader{
      .preloader{
        background: #fff;
    }
  }
    section.bg-bottom::before, .section.bg-bottom::before{
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
    .section.bg-bottom::before{
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
    .section.bg-top::after, .section.bg-top::after {
      background-image: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));
    }
    .list_location li{
      color: #202020;
      span{
        color:#202020;
      }
    }
    .float-text span{
      color: #222;
    }
    .navbar-brand .imginit{
      display: none !important;
    }
    .navbar-brand .imgsaly{
      display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
      color: #222;
    }
    #header-wrap.sticky nav.navbar{
      background: #ffffff;
    }
    h1, h2, h4, h3, h5, h6, .h1_big, .h1, .h2, .h3, .h4, .h5, .h6, footer.footer-light h5, .burgermenu, blockquote.q-big, 
    .d_timeline-title, .d_timeline-text .d_title{
      color: #202020;
    }
    .mouse {
      border: 2px solid rgba(0, 0, 0, 0.9);
      .scroll{
        background: #202020;
      }
    }
    .d-quote-by, .de_3d-box {
      border-left: solid 1px rgba(0, 0, 0, 0.2);
    }
    .de_modal .card-image-1 h3{
      color: #fff;
    }
    .CircularProgressbar .CircularProgressbar-text{
      fill: #202020 !important;
    }
    .CircularProgressbar-trail{
      stroke: rgba(0, 0, 0, .1) !important;
    }
    .d_timeline-title{
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .d_timeline-item {
    list-style: none;
    border-left: 1px solid rgba(0, 0, 0, .2);
    &:last-child{
      border-left: 1px solid rgba(0, 0, 0, 0);
    }
  }
  #scroll-to-top div{
    background: none;
    border: solid 1px rgba(0, 0, 0, 0.2);
    &:hover{
      background: none;
    }
    i{
      color: #202020;
    }
  }
  .LightboxGal{
    background: #fff;
  }
  #blog-comment ol li .comment-info .c_reply{
    border-left-color: rgba(0, 0, 0, 0.2);
  }
  #blog-comment ol li{
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }
  .form-border input[type="text"], .form-border input[type="text"]:focus{
    color: #202020;
    border: solid 1px rgba(0, 0, 0, 0.2);
  }
  #contact_form textarea, #contact_form textarea:focus{
    color: #202020;
    border: solid 1px rgba(0, 0, 0, 0.2);
  }
  #btnsubmit{
    margin-top: 20px;
  }
  .btn:hover, .btn:focus{
    color: #fff;
    background: rgba(var(--primary-color-rgb), 1);
  }
  .LightboxGal .closeGal .button-close{
    border: 1px solid rgba(0, 0, 0, 0.5);
    &:before{
      border-left: 8px solid #202020;
      border-right: 8px solid #202020;
    }
    &:after{
      border-left: 8px solid #202020;
      border-right: 8px solid #202020;
    }
  }
  .de_project-details .d-field{
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    i {
      color: #202020;
    }
  }
  .LightboxGal .mainLightbox blockquote{
    color: #606060;
  }
  .LightboxGal .mainLightbox blockquote span::before{
    background: #606060;
  }
  .de_project-info p{
    color: #909090;
  }
  .de_project-details{
    color: #202020;
  }
  .CircularProgressbar .CircularProgressbar-trail{
    stroke: rgba(0, 0, 0, 0.1) !important;
  }
  footer{
    border-top: solid 1px rgba(0, 0, 0, .1);
    color: rgba(0, 0, 0, .8) !important;
    background: rgba(255, 255, 255, 0.1);
    a{
      color: rgba(0, 0, 0, .8) !important;
      i{
        color: rgba(0, 0, 0, .8) !important;
      }
    }
  }
  .mobilemenu{
    background: #fff;
  }
  .mainreveal{
    background: #fff;
  }
  #de-menu-reveal .lt, #de-menu-reveal .lm, #de-menu-reveal .lb{
    background: #202020;
  }
`;

export default function Home() {
  useEffect(() => {
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
        <Parallax bgImage={image1} strength={300}>
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
