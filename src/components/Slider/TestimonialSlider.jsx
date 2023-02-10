import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testi/code.png',
      testimonialText:
        "We hired The Dot Tech  team for our startup. They not only brought our vision to life, but also offered valuable insights and suggestions throughout the process. Our website is now modern, user-friendly and helps us effectively reach and engage with our target audience. We highly recommend this team to any startup looking to elevate their online presence. Thank you for the fantastic work!",
      avatarName: 'SHIVA ',
      avatarDesignation: 'CODING FOR DEAF, USA',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/testi/ice.png',
      testimonialText:
        
"I recently had the pleasure of working with the team thedot tech to design a board for my cafe's 2nd year anniversary. From start to finish, the process was seamless and the team was incredibly responsive to my needs and requests. The final product was even better than I could have imagined and truly exceeded my expectations. The quality of the design and materials used were top-notch and made for a stunning display. I would highly recommend thedot tech  to anyone in need of custom design work and I cannot wait to work with them again in the future.",
      avatarName: 'GOWTHAM ',
      avatarDesignation: ' ICE CREAM CAFE',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testi/csc.png',
      testimonialText:
       " Working with the dot tech on my logo and website design was a fantastic experience. The end result perfectly reflects my brand and the website is both visually appealing and functional. thedot was professional, responsive, and delivered the project on time. I highly recommend their services.",
      avatarName: 'Subramanian ',
      avatarDesignation: 'csc president ',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testi/bangs.png',
      testimonialText:
        "I've been using the digital marketing services for my salon for the past 8 months and I am blown away by the results. The team at the dot tech not only increased our online presence but also helped us attract new customers. The monthly reports and analysis provided give us insight into our target audience and how we can better serve them. I highly recommend their services to any salon looking to expand their reach and grow their business. Thank you thedot tech for your hard work and dedication to our success!",
      avatarName: 'Divya ',
      avatarDesignation: 'bangs salon ',
      ratings: '3.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
