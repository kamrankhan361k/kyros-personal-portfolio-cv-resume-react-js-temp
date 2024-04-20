import { useEffect, useState } from "react";
import React from 'react';
import Typed from "react-typed";
import Aos from 'aos';
import "aos/dist/aos.css";

function Hero(data) {
  const [homeData, setHomeData] = useState(false);
  
  useEffect(() => {
    setHomeData(data.data);

    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

  }, [data]);

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
                            >I Am {homeData?.name}
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            {/* <Typed
                                strings={proffesions && proffesions.length>0 && proffesions.map((item) => item.name)}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              /> */}
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            {homeData?.places?.map((item,index) => 
                              <li key={index}><span>{item.country}</span>{item.city}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
