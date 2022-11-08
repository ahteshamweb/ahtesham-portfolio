import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I’ve made over 200 purchases on Fiverr and this was the best transaction out of all of them. The seller delivered top notch service and went above and beyond to help me get my store started."
    },
    {
      img: profilePic2,
      review:"Very professional service, delivered on time. Ahtesham communicates well at every stage to check I am happy, using videos to show changes, which is great for a website beginner like me 👍🏻 definitely would recommend 😀"
    },
    {
      img: profilePic3,
      review:"Nauman built our website a couple years ago. I need to fix few Backend issues and he solved them very quickly. Great Team and Great Response"
    },
    {
      img: profilePic4,
      review:"This freelancer helped me launch my website ahead of schedule. My website looks exactly the way I want it to and the team was professional and responsive throughout the entire process."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
