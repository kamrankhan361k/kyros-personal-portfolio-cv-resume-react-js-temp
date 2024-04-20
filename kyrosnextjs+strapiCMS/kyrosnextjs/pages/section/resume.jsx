import React, { useEffect, useState } from 'react';
import  Aos from 'aos';
import "aos/dist/aos.css";

function Resume(data) {
    const [myResumeData, setMyResumeData] = useState(false);
    
    useEffect(() => {
        setMyResumeData(data.data);

        Aos.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        });
    }, [data]);

	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">
                <div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            {myResumeData?.experiences?.map((item) => (
                                <li key={item.id} className="d_timeline-item">
                                    <h3 className="d_timeline-title">{item.year}</h3>
                                    <p className="d_timeline-text">
                                        <span className="d_title">{item.role}</span>
                                        <span className="d_company">{item.company}</span>
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            {myResumeData?.educations?.map((item) => (
                                <li key={item.id} className="d_timeline-item">
                                    <h3 className="d_timeline-title">{item.year}</h3>
                                    <p className="d_timeline-text">
                                        <span className="d_title">{item.degree}</span>
                                        <span className="d_company">{item.institution}</span>{item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default Resume;