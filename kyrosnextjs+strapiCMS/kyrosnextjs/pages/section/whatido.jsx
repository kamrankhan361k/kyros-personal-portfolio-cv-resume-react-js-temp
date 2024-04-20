import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Whatido(data) {
  const [whatIDoData, setWhatIDoData] = useState(false);

  useEffect(() => {
    setWhatIDoData(data.data);
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [data]);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                {whatIDoData?.jobs?.map((item) => (
                    <div key={item.id} className="col-lg-4"
                        data-aos="fade"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
                        >
                        <div className="de_3d-box">
                            <div className="d-inner">
                                <i className={item.classIconName}></i>
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Whatido;