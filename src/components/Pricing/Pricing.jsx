import React from "react";
import "./Princing.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="Princing_Section">
      <h2>PRICING TABLE</h2>
      <h1>Choose Your Princing Plan</h1>
      <div className="Princing_Content">
        <div className="Princing_Box">
          <div className="Princing_Box_Content">
            <div className="Princing_Box_Content_Title">Basic</div>
            <div className="Princing_Box_Content_Price">$0</div>
          </div>
          <ul>
            <li>< FaCheck className="pricing_check"/> Unlimit club Accecs</li>
            <li>< FaCheck className="pricing_check"/> Group Attendance</li>
            <li>< FaCheck className="pricing_check"/> Gym visits</li>
            <li>< FaCheck className="pricing_check"/> Visit to the bath complex</li>
            <li>< FaCheck className="pricing_check"/> Gym, figth club</li>
          </ul>
          <button>
            <a href="#contact">Join Now</a>
          </button>
        </div>
        <div className="Princing_Box">
          <div className="Princing_Box_Content">
            <div className="Princing_Box_Content_Title">Standard</div>
            <div className="Princing_Box_Content_Price">$50</div>
          </div>
          <ul>
            <li>< FaCheck className="pricing_check"/> Unlimit club Accecs</li>
            <li>< FaCheck className="pricing_check"/> Group Attendance</li>
            <li>< FaCheck className="pricing_check"/> Gym visits</li>
            <li>< FaCheck className="pricing_check"/> Visit to the bath complex</li>
            <li>< FaCheck className="pricing_check"/> Gym, figth club</li>
          </ul>
          <button>
            <a href="#contact">Join Now</a>
          </button>
        </div>
        <div className="Princing_Box">
          <div className="Princing_Box_Content">
            <div className="Princing_Box_Content_Title">Premium</div>
            <div className="Princing_Box_Content_Price">$100</div>
          </div>
          <ul>
            <li>< FaCheck className="pricing_check"/> Unlimit club Accecs</li>
            <li>< FaCheck className="pricing_check"/> Group Attendance</li>
            <li>< FaCheck className="pricing_check"/> Gym visits</li>
            <li>< FaCheck className="pricing_check"/> Visit to the bath complex</li>
            <li>< FaCheck className="pricing_check"/> Gym, figth club</li>
          </ul>
          <button>
            <a href="#contact">Join Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
