import { useEffect } from "react";
import React from 'react';
import Typed from "react-typed";
import Aos from 'aos';

import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
        <div className="v-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >I Am Kyros Noriaki
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["FREELANCER ", "PROGAMMER" , "PHOTOGRAPHER"]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <li><span>France</span>Bodin, Chauveau</li>
                            <li><span>USA</span>Louisiana, Bayerfurt</li>
                            <li><span>German</span>Hamburg, Dortmund</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
