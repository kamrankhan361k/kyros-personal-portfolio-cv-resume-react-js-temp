import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';
import api from '../api/api'

const Navbar= function(data) {
  const [navBarData, setNavbarData] = useState(false);
  const [showmenu, btn_icon] = useState(false);
  const [flyText, setFlyText] = useState(null);
  const [isHomeLight, setIsHomeLight] = useState(false);
  
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    setFlyText(document.getElementById("fly"));
    setIsHomeLight(window.location.href.includes("homelight"));
    setNavbarData(data.data);
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
       btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          flyText?.classList.add("hide");
        } else {
          header.classList.remove("sticky");
          flyText?.classList.remove("hide");
          totop.classList.remove("show");
        } 
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, [data, flyText]);
    return(
        <nav className="navbar transition">
        <div className="container">
        {isHomeLight == true &&
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <Image src="../img/logo-dark.png" className="img-fluid imgsaly" alt="logo" width={138} height={36}/>
          </Link>
        }

        {isHomeLight == false && navBarData?.logoImage?.length > 0 && 
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <Image priority={true} src={`${api.baseUrl}${navBarData?.logoImage[0].url}`} className="img-fluid d-block imginit" alt="logo" width={138} height={36}/>  
          </Link>
        }

          {/* Desktop menu Here */}
          <div className="dekstopmenu">
             <ul className="navbar-nav">
              {navBarData?.menus?.map((item) => (
                item.enabled && <li key={item.id} className="nav-item">
                  <Link className="nav-link transition" activeClass="active" spy to={item.spyTo}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Desktop menu Here */}

          {/* mobile menu here */}
          {showmenu && 
          <div className="mobilemenu" >
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              {navBarData?.menus?.map((item) => (
                item.enabled && <li key={item.id} className="nav-item">
                  <Link className="nav-link" activeClass="active" smooth spy to={item.spyTo}>
                    {item.label}
                  </Link>
                </li>
              ))}
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