import React, { useEffect, useState } from "react"
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Aos from 'aos';
import "aos/dist/aos.css";

function About(data) {
  const [aboutMeData,setAboutMeData] = useState(false);
  let delay = 0;

  useEffect(() => {
    setAboutMeData(data.data);
    
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
          <div className="col-md-12 text-center">
            <h2 data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true">About Me</h2>
            <div className="space-border"
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            ></div>
          </div>
          <div className="col-md-8 text-center m-auto"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <p>{aboutMeData.description}</p>
          </div>
        </div>
        <div className="row">
          {aboutMeData?.skills?.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 p-5 text-center"
              data-aos="fade"
              data-aos-delay={`${delay+=100}`}
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <CircularProgressbar value={item.percentage} text={`${item.percentage}.0%`} />
              <h4 className="mt-2">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
