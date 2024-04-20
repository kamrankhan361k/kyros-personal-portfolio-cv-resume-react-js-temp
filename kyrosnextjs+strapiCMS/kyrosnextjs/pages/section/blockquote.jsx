import React, { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";
import Aos from 'aos';
import "aos/dist/aos.css";
import api from '../api/api';

function Mblockquote(data) {
  const [quoteData, setQuoteData] = useState(false);
  
  useEffect(() => {
    setQuoteData(data.data);
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [data]);

    return(
        <div  className="section bg-top bg-bottom py-0">
          <Parallax className="pb-5" bgImage={`${api.baseUrl}${quoteData?.backgroundImage?.url}`} strength={300}>  
          <div className="py-5 position-relative"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 offset-md-1">
                            <div className="spacer-double"></div>
                            {quoteData?.quotes?.map((item) => (
                              <blockquote key={item.id} className="q-big">
                                  <i className="d-big icon_quotations"></i>
                                  {item.text}
                                  <span className="d-quote-by">{item.from}</span>
                              </blockquote>
                            ))}
                            <div className="spacer-double"></div>
                            <div className="spacer-double"></div>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Mblockquote;