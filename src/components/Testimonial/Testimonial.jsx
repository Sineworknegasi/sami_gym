import React from "react";
import { Slide } from "react-slideshow-image";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";

const customers = [
  {
    name: "Scott Swanson",
    image:
      "https://www.andrewprod.com/wp-content/uploads/2018/06/Personal-Trainer-Portraits.jpg",
    Comments:
      "I have been a client of this gym for over 5 years and I have never been disappointed. The trainers are very professional and the equipment is top notch. I would recommend this gym to anyone looking to get in shape.",
  },
  {
    name: "Scott Swanson",
    image:
      "https://www.viewbug.com/media/mediafiles/2018/01/18/77052177_large.jpg",
    Comments:
      "I have been a client of this gym for over 5 years and I have never been disappointed. The trainers are very professional and the equipment is top notch. I would recommend this gym to anyone looking to get in shape.",
  },
  {
    name: "Scott Swanson",
    image:
      "https://www.westend61.de/images/0000788871pw/portrait-of-smiling-young-man-in-new-home-UUF10751.jpg",
    Comments:
      "I have been a client of this gym for over 5 years and I have never been disappointed. The trainers are very professional and the equipment is top notch. I would recommend this gym to anyone looking to get in shape.",
  },
  {
    name: "Scott Swanson",
    image:
      "https://www.thefashionisto.com/wp-content/uploads/2014/07/Dawid-Schaffranke-Model-003-290x413.jpg",
    Comments:
      "I have been a client of this gym for over 5 years and I have never been disappointed. The trainers are very professional and the equipment is top notch. I would recommend this gym to anyone looking to get in shape.",
  },
];

const customercomment = customers.map((customer) => {
  return (
    <div className="customers">
        <div className="Customers_image">
            <img src={customer.image} alt="" />
            <div>
            <strong>{customer.name}</strong>
            <p>Our Client</p>
            </div>
      </div>
      <div className="Comment_rate">
        <p>{customer.Comments}</p>
        <div className="Star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
      </div>
    </div>
  );
});

const Testimonial = () => {
  return (
    <section className="Testimonial_Section">
      <div className="Testimonial">
        <h1>TestiMonial</h1>
        <h2>What Our Clients Says</h2>
      </div>
      <div className="Testimonial_Content">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 768, // Large screens (TVs, desktops)
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              },
            },
            {
              breakpoint: 425, // Large screens (TVs, desktops)
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {customercomment}
        </Slide>
        </div>
    </section>
  );
};

export default Testimonial;
