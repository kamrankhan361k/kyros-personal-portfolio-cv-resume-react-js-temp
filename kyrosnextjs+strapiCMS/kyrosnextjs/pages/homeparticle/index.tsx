import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/Hero';
import Particle from '../section/particle';
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
import { fetchData } from '../api/apiDo';
import api from '../api/api';

const image1 ="../img/background/4.jpg";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

export async function getStaticProps() {
  const homeData = await fetchData(api.home);
  const aboutMeData = await fetchData(api.aboutMe);
  const quotesData = await fetchData(api.quote);
  const whatidoData = await fetchData(api.whatIDo);
  const portfolioData = await fetchData(api.portfolio);
  const myResumeData = await fetchData(api.myResume);
  const counterData = await fetchData(api.counter);
  const blogData = await fetchData(`${api.blog}?populate=*`);
  const contactMeData = await fetchData(api.contactMe);
  const navBarData = await fetchData(api.navigationBar);
  const footerData = await fetchData(api.footer);
  const mediaSocialData = await fetchData(api.mediaSocial);

  return {
    props: {
      homeData: homeData.data,
      aboutMeData: aboutMeData.data,
      quoteData: quotesData.data,
      whatidoData: whatidoData.data,
      portfolioData: portfolioData.data,
      myResumeData: myResumeData.data,
      counterData: counterData.data,
      blogData: blogData.data,
      contactMeData: contactMeData.data,
      navBarData: navBarData.data,
      footerData: footerData.data,
      mediaSocialData: mediaSocialData.data,
    }
  };
}

export default function Home(props: any) {
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

      <GlobalStyles />

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
          <Navbar data={props.navBarData} />
        </header>

        {/* HERO */}
        {props.navBarData.menus.find((menu: any) => menu.id === 1).enabled &&
          <section id="hero-area" className="bg-bottom py-0">
            <Parallax bgImage={image1} strength={300}>
              <Particle />
              <Hero data={props.homeData} />
              <Link smooth spy to="about">
                <span className="mouse transition" id="fly">
                  <span className="scroll"></span>
                </span>
              </Link>
            </Parallax>
          </section>
        }

        {/* ABOUT */}
        {props.navBarData.menus.find((menu: any) => menu.id === 2).enabled &&
          <section id="about" className="pb-0">
            <About data={props.aboutMeData} />
            <Blockquote data={props.quoteData} />
          </section>
        }

        {/* What I DO */}
        {props.navBarData.menus.find((menu: any) => menu.id === 3).enabled &&
          <section id="whatido">
            <Whatido data={props.whatidoData} />
          </section>
        }

        {/* Gallery */}
        {props.navBarData.menus.find((menu: any) => menu.id === 4).enabled &&
          <section id="gallery">
            <Gallery data={props.portfolioData} />
          </section>
        }

        {/* Resume */}
        {props.navBarData.menus.find((menu: any) => menu.id === 5).enabled &&
          <section id="resume" className="pb-0">
            <Resume data={props.myResumeData} />
            <Counter data={props.counterData} />
          </section>
        }

        {/* Blog */}
        {props.navBarData.menus.find((menu: any) => menu.id === 6).enabled &&
          <section id="blog" className="pb-0">
            <Blog data={props.blogData} />
          </section>
        }

        {/* contact */}
        {props.navBarData.menus.find((menu: any) => menu.id === 7).enabled &&
          <section id="contact" className="pb-0">
            <Contact data={props.contactMeData} />
            <Footer data={props.footerData} />
          </section>
        }

        <div className="float-text">
          <div className="de_social-icons">
            {props.mediaSocialData.map((item: any) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"><span className="button"><i className={item.iconClassName}></i></span></a>
            ))}
          </div>
          <span>Follow Me</span>
        </div>
      </div>
      <ScrollToTopBtn />
    </>
  )
}
