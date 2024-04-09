import React from "react";
import "./OurStatics.css";

const OurStatics = () => {
  return (
    <section className="Statstics">
      <div className="Stat_detail">
        <h2>Our Statics</h2>
        <h1>We are Best In Our Classe</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          lacinia augue, eu accumsan leo lobortis eget. Donec
        </p>
        <div className="Class_Percent stat_percent">
          <strong>Client Satisfaction</strong>
          <span id="percent">95%</span>
        </div>
        <div className="Line" id="Line"></div>
        <div className="Class_Percent stat_percent">
          <strong>Support Customer</strong>
          <span id="percent">80%</span>
        </div>
        <div className="Line" id="Line"></div>
      </div>
      <div className="Appointment">
        <div className="Appointment_detail">
          <h1> Get Appointment</h1>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea name="Messages" id="" cols="20" rows="2" placeholder="Enter Your message"></textarea>
          <button>SUBMIT NOW</button>
        </div>
      </div>
    </section>
  );
};

export default OurStatics;
