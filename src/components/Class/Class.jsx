import React from "react";
import { CgGym } from "react-icons/cg";
import { Execise } from "../file/Exercise";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Class.css";

const Exercises = Execise.map((item) => {
    return (
        <div className="Class_name_card" >
        <img
          src={item.image}
          alt="Gym_image"
        />
        <div className="Class_detail">
          <div className="Title">
            <CgGym className="Title_logo" />
            <h3>{item.title}</h3>
          </div>
          <p>
            {item.description}
          </p>
          <div className="Class_Percent">
            <strong>Class full</strong>
            <span id="percent">{item.Rate} %</span>
          </div>
          <div className="Line" id="Line"></div>
        </div>
      </div>
    )
} )

const Class = () => {
  return (
    <section className="Class_section_container" id="Class" >
      <div className="Class_section">
      <div className="Class_Content">
        <h2>Our Classes</h2>
        <h1>Fitness Classes For Every Goal</h1>
        <div className="Class_names">
          {Exercises}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Class;
