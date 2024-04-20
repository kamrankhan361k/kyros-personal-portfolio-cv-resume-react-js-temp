import React, {useEffect, useState} from 'react';
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import  Aos from 'aos';
import "aos/dist/aos.css";

function Counter(data) {
    const bgImage = `../img/background/l3.jpg`;
    const [counterData, setCounterData] = useState(false)
    
    useEffect(() => {
        setCounterData(data.data);

        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, [data]);

    return(
        <div className="section bg-top bg-bottom py-0">
          <Parallax className="py-5" bgImage={bgImage} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container">
                    <div className="row">
                        {counterData?.counters?.map((item) => (
                            <div key={item.id} className="col-md-3">
                                <div className="de_count text-center">
                                    <h3 className="timer"
                                    data-aos="fade"
                                data-aos-delay="0"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                data-aos-once="true"
                                    >
                                        <CountUp
                                        start={0}
                                        end={item.value}
                                        duration={10}
                                        useEasing={true}
                                        separator=","
                                        />
                                    </h3>
                                    <span>{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Counter;