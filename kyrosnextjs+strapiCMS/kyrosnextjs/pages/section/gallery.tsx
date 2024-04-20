import Image from 'next/image';
import Masonry from 'react-masonry-css';
import React, { useEffect,useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import api from '../api/api'

enum DetailType {
    singleImage = "singleImage",
    multipleImages = "multipleImages",
    video = "video"
}

interface Portfolio {
    id: number;
    title: string;
    description: string;
    client: string;
    type: string;
    year: string;
    preview: string;
    feedback: string;
    feedbackFrom: string;
    detailType: string;
    media: [
        {
            url:string;
        }
    ]
    thumbnail: {
        url:string;
    }
}

function Gallery(data: any) {
    const [portfolioData, setPortfolioData] = useState([]);
    
    useEffect(() => {
        setPortfolioData(data.data);

        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, [data]);

    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);;
    
    /* lightbox dynamic */
    const [lighbx, setlighbx] = useState(false);
    const [lighbx1, setlighbx1] = useState(false);
    const [lighbx2, setlighbx2] = useState(false);

    const setLightBox = (type?:string):void => {
        switch(type) {
            case DetailType.singleImage:
                setlighbx(!lighbx);
                break;
            case DetailType.multipleImages:
                setlighbx1(!lighbx1);
                break;
            default:
                setlighbx2(!lighbx2);
        }
    }

    const handleBtnClick = (event: React.MouseEvent<HTMLDivElement>, portfolio: Portfolio): void => {
        setSelectedPortfolio(portfolio);
        setLightBox(portfolio.detailType);
        
        var x = document.getElementsByTagName("BODY")[0] as HTMLDivElement;
        x.style.overflow = "hidden";
    }

    const handleBtnClickclose = (): void => {
        setLightBox(selectedPortfolio?.detailType);
        var x = document.getElementsByTagName("BODY")[0] as HTMLDivElement;
        x.style.overflow = "auto";
        setSelectedPortfolio(null);
    };

    const breakpointColumnsObj = {
        default: 3,
        900: 3,
        800: 2,
        500: 1
    };
    return (
        <div className="container px-0">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Portfolio</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {portfolioData?.map((item: Portfolio) => (
                    <div key={item.id} className="image-element-class de_modal de_modal"
                        onClick={(event) => handleBtnClick(event, item)}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>{item.title}</h3>
                                <h5 className="d-tag">{item.type}</h5>
                            </div>
                            <Image width="100" height="100" src={`${api.baseUrl}${item.thumbnail.url}`} alt="gallery" />
                        </div>
                    </div>
                ))}
            </Masonry>
            
            {/* lightbox single image */}
            {lighbx && selectedPortfolio && (
                <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                        <div className="mainLightbox container">
                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <Image width="100" height="100" src={`${api.baseUrl}${selectedPortfolio.media[0].url}`} alt="popup" className="img-fluid" />
                                </div>

                                <div className="col-lg-4 de_project-info">
                                    <h3>{selectedPortfolio.title}</h3>
                                    <p>{selectedPortfolio.description}</p>

                                    <div className="de_project-details">
                                        <div className="d-field">
                                            <i className="fa fa-user-o"></i>Client: <span>{selectedPortfolio.client}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-file-text-o"></i>Type: <span>{selectedPortfolio.type}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-calendar-o"></i>Year: <span>{selectedPortfolio.year}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-external-link"></i>Preview: <span><a href={selectedPortfolio.preview} target="_blank" rel="noreferrer">{selectedPortfolio.preview}</a></span>
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>
                                    <blockquote>
                                        {selectedPortfolio.feedback}
                                        <span>{selectedPortfolio.feedbackFrom}</span>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* lightbox multiple images */}
            {lighbx1 && selectedPortfolio && (
                <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                        <div className="mainLightbox container">
                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <div className="row g-4">
                                        {selectedPortfolio.media.map((item:any) => (
                                            <div key={item.id} className="col-lg-12 item">
                                                <Image width="100" height="100" src={`${api.baseUrl}${item.url}`} alt="galleryimage" className="img-fluid" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-lg-4 de_project-info">
                                    <h3>{selectedPortfolio.title}</h3>
                                    <p>{selectedPortfolio.description}</p>

                                    <div className="de_project-details">
                                        <div className="d-field">
                                            <i className="fa fa-user-o"></i>Client: <span>{selectedPortfolio.client}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-file-text-o"></i>Type: <span>{selectedPortfolio.type}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-calendar-o"></i>Year: <span>{selectedPortfolio.year}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-external-link"></i>Preview: <span><a href={selectedPortfolio.preview} target="_blank" rel="noreferrer">{selectedPortfolio.preview}</a></span>
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>
                                    <blockquote>
                                        {selectedPortfolio.feedback}
                                        <span>{selectedPortfolio.feedbackFrom}</span>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* lightbox video */}
            {lighbx2 && selectedPortfolio && (
                <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                        <div className="mainLightbox container">
                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <video className="pop" controls autoPlay loop>
                                        <source src={`${api.baseUrl}${selectedPortfolio.media[0].url}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className="col-lg-4 de_project-info">
                                    <h3>{selectedPortfolio.title}</h3>
                                    <p>{selectedPortfolio.description}</p>

                                    <div className="de_project-details">
                                        <div className="d-field">
                                            <i className="fa fa-user-o"></i>Client: <span>{selectedPortfolio.client}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-file-text-o"></i>Type: <span>{selectedPortfolio.type}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-calendar-o"></i>Year: <span>{selectedPortfolio.year}</span>
                                        </div>
                                        <div className="d-field">
                                            <i className="fa fa-external-link"></i>Preview: <span><a href={selectedPortfolio.preview} target="_blank" rel="noreferrer">{selectedPortfolio.preview}</a></span>
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>
                                    <blockquote>
                                        {selectedPortfolio.feedback}
                                        <span>{selectedPortfolio.feedbackFrom}</span>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Gallery;