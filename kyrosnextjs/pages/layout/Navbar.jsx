import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';

import logoImg from '../../public/img/logo.png';
import logoImg1 from '../../public/img/logo-3.png';
import logoImg2 from '../../public/img/logo-6.png';
import logoImg3 from '../../public/img/logo-7.png';
import logoImg4 from '../../public/img/logo-5.png';
import logoImg5 from '../../public/img/logo-4.png';
import logoImg6 from '../../public/img/logo-2.png';

const Navbar= function() {

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const flytext = document.getElementById("fly");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
       btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          flytext.classList.add("hide");
        } else {
          header.classList.remove("sticky");
          flytext.classList.remove("hide");
          totop.classList.remove("show");
        } 
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return(
        <nav className="navbar transition">
        <div className="container">
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <Image src={logoImg} className="img-fluid d-block imginit" alt="logo"/>
            <Image src={logoImg1} className="img-fluid imgsaly" alt="logo"/>
            <Image src={logoImg2} className="img-fluid imggrey" alt="logo"/>
            <Image src={logoImg3} className="img-fluid imgchef" alt="logo"/>
            <Image src={logoImg4} className="img-fluid imgdesigner" alt="logo"/>
            <Image src={logoImg5} className="img-fluid imglawyer" alt="logo"/>
            <Image src={logoImg6} className="img-fluid imgdark" alt="logo"/>
          </Link>
          {/* Desktop menu Here */}
          <div className="dekstopmenu">
             <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop menu Here */}

          {/* mobile menu here */}
          {showmenu && 
          <div className="mobilemenu" >
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition"smooth activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          }
          <button className="burgermenu" type="button" onClick={() => btn_icon(!showmenu)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/* mobile menu here */}
        </div>
      </nav>
    )
}

export default Navbar;