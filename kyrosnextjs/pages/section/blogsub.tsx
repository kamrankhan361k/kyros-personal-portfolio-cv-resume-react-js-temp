import dynamic from "next/dynamic";
import Image from 'next/image';
import React from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import  Aos from 'aos';
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Pagination]);

export default function Blogmain() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0].classList.add("ohidden");
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      document.getElementsByTagName("BODY")[0].classList.remove("ohidden");
    };
    return(
        <div className="container">
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Recent Blog</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="row"
                data-aos="fade-up"
                data-aos-once="true"
                >

                <Swiper
                    pagination={{
                        clickable: true,
                      }}
                    centeredSlides={false}
                    loop={false}
                    breakpoints={{
                        430: {
                          width: 400,
                          slidesPerView: 1,
                          spaceBetween:30,
                        },
                        768: {
                          width: 720,
                          slidesPerView: 2,
                          spaceBetween:30,
                        },
                        1240: {
                          width: 1240,
                          slidesPerView: 3,
                          spaceBetween:30,
                        },
                      }}
                    className="swiper-container-blog"
                >
                <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image" onClick={handleBtnClick}>
                                <div className="de_modal">
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/1.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">How to Make Better User Interface</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/2.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">10 Web Design Tips From Experts</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                     <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/3.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">The Importance of Web Design</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                 <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image" onClick={handleBtnClick}>
                                <div className="de_modal">
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/1.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">How to Make Better User Interface</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/2.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">10 Web Design Tips From Experts</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                     <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/3.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">The Importance of Web Design</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image" onClick={handleBtnClick}>
                                <div className="de_modal">
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/1.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">How to Make Better User Interface</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                    <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/2.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">10 Web Design Tips From Experts</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                     <div className="bloglist item">
                        <div className="post-content">
                            <div className="post-image">
                                <div className="de_modal" onClick={handleBtnClick}>
                                  <Image width="100" height="100" alt="blogimg" src="../img/blog/3.jpg" className="grayscale"/>
                                </div>
                            </div>
                            <div className="post-text" onClick={handleBtnClick}>
                                <h4 className="de_modal">The Importance of Web Design</h4>
                                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            </div>

              {/* lightbox1 */}
              {lighbx && ( 
              <div className="LightboxGal">
                <div className="closeGal">
                    <button className="button-close" onClick={handleBtnClickclose}></button>
                </div>
                <div className="v-center w-100">
                  <div className="mainLightbox container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="blog-read">

                                <Image width="100" height="100" alt="blogimg" src="../img/blog/big.jpg" className="img-fullwidth rounded"/>

                                <div className="post-info">
                                    <span className="post-date">April 1, 2018</span>
                                    <span className="post-like">181</span>
                                    <span className="post-comment">5</span>
                                </div>

                                <h2>How to Make Better User Interface</h2>

                                <div className="post-text">
                                    <p>Quis sunt quis do laboris eiusmod in sint dolore sit pariatur consequat commodo aliqua nulla ad dolor aliquip incididunt voluptate est aliquip adipisicing ea cupidatat nostrud incididunt aliquip dolore. Sed minim nisi duis laborum est labore nisi amet elit adipisicing proident do consectetur dolor labore sit nisi ad proident esse ad velit nisi irure reprehenderit ut et dolor labore veniam quis.</p>

                                    <p>Sunt duis laboris ex et quis laborum laborum cillum mollit voluptate culpa consequat ex cupidatat dolor eiusmod proident proident cillum pariatur sint adipisicing in nostrud do dolore consectetur quis incididunt minim consectetur. Exercitation elit proident dolor est id eiusmod dolor dolor incididunt ad voluptate laboris cupidatat est est sint veniam sint officia sint incididunt est sit ut tempor commodo pariatur ut proident et do.</p>

                                    <p>Sed eu in ut sint dolor irure fugiat minim veniam sed ea proident ullamco occaecat irure ut velit eu ullamco fugiat cupidatat dolore fugiat. Lorem ipsum id non deserunt id consequat duis voluptate amet aliqua pariatur laboris officia pariatur veniam velit reprehenderit sint nostrud cupidatat magna eiusmod mollit exercitation pariatur nulla minim laboris dolore aliqua consectetur cillum duis aute consectetur.</p>
                                </div>

                            </div>

                            <div className="blog-comment">
                                <h4>Comments</h4>

                                <div className="spacer-half"></div>

                                <ol>
                                    <li>
                                        <div className="avatar">
                                            <Image width="100" height="100" src="../img/blog/avatar-1.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Jovan Eadie</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>

                                    <li>
                                        <div className="avatar">
                                            <Image width="100" height="100" src="../img/blog/avatar-2.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Ariana Haylock</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>

                                    <li>
                                        <div className="avatar">
                                            <Image width="100" height="100" src="../img/blog/avatar-3.jpg" alt="blogimg"/></div>
                                        <div className="comment-info">
                                            <span className="c_name">Reginald Safi</span>
                                            <span className="c_date id-color">15 January 2020</span>
                                            <span className="c_reply"><span >Reply</span></span>
                                            <div className="clearfix"></div>
                                        </div>

                                        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                        
                                    </li>
                                </ol>

                                <div className="spacer-single"></div>

                                <div id="comment-form-wrapper">
                                    <h4>Leave a Comment</h4>
                                    <div className="comment_form_holder">
                                        <form id="contact_form" name="form1" className="form-border" action="submit">
                                            <label>Name</label>
                                            <input name="name" id="name" className="form-control"/>
                                            <label>Email <span className="req">*</span></label>
                                            <input name="email" id="email" className="form-control"/>
                                            <label>Message <span className="req">*</span></label>
                                            <textarea  name="message" id="message" className="form-control">
                                            </textarea>
                                            <p id="btnsubmit">
                                            <input id="send" value="Send" className="btn btn-main mt-3"/>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
              )}

        </div>
  )
}