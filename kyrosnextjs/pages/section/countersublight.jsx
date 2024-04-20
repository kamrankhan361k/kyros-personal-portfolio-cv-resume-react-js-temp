import React from 'react';
import { Parallax } from "react-parallax";
import { CountUp } from 'use-count-up';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";

const image1 ="../img/background/l3.jpg";


function Counter() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);
    return(
        <div className="section bg-top bg-bottom py-0">
          <Parallax className="py-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="0"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  >
                                    <CountUp isCounting end={8240} duration={3} />
                                </h3>
                                <span>Hours of Works</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="200"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={315} duration={3} /></h3>
                                <span>Projects Done</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="400"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={250} duration={3} /></h3>
                                <span>Satisfied Customers</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="600"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp isCounting end={32} duration={3} /></h3>
                                <span>Awards Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Counter;