import React from "react";
import { Slide } from "react-slideshow-image";
import "./Trainer.css";
import { FaSmile } from "react-icons/fa";
import { IoFitness, IoBarbellSharp } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";

const TrainerCard = [
  {
    name: "Samual ",
    image:
      "https://i.pinimg.com/originals/c2/de/e3/c2dee3f1c6756b2a3e301138e7800017.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "Bereket",
    image:
      "https://fitnessinformant.com/wp-content/uploads/2020/01/markglazierphoto.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "Melat",
    image:
      "https://www.andrewprod.com/wp-content/uploads/2018/06/Personal-Trainer-Portraits.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "SInework",
    image:
      "https://images-pw.pixieset.com/elementfield/33316503/0067-5a585119.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "Samual ",
    image:
      "https://i.pinimg.com/originals/c2/de/e3/c2dee3f1c6756b2a3e301138e7800017.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "Bereket",
    image:
      "https://fitnessinformant.com/wp-content/uploads/2020/01/markglazierphoto.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "Melat",
    image:
      "https://www.andrewprod.com/wp-content/uploads/2018/06/Personal-Trainer-Portraits.jpg",
    occupation: "Personal Trainer",
  },
  {
    name: "SInework",
    image:
      "https://images-pw.pixieset.com/elementfield/33316503/0067-5a585119.jpg",
    occupation: "Personal Trainer",
  },
];

const trainer = TrainerCard.map((menu) => {
  return (
    <div className="Trainer_Card">
      <div className="Image">
        <img src={menu.image} alt="Trainer" />
      </div>
      <h1>{menu.name}</h1>
      <h2>{menu.occupation}</h2>
      <div className="Social_medias">
        <a href="http://">
          {" "}
          <FaFacebook />{" "}
        </a>
        <a href="http://">
          <FaInstagram />
        </a>
        <a href="http://">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
});

const Example = () => {
  return (
    <section className="Trainer_section_container">
      <div className="Trainer_Section">
        <div className="Satsfaction_Section">
          <div className="Satsfation">
            <div className="Satsfation_Content">
              <h1>874</h1>
              <div className="Sats_detail">
                <FaSmile className="Sats_Emoji" />
                <p>Happy Clinets</p>
              </div>
            </div>
            <div className="Satsfation_Content">
              <h1>987</h1>
              <div className="Sats_detail">
                <IoFitness className="Sats_Emoji" />
                <p>Total Clinets</p>
              </div>
            </div>
            <div className="Satsfation_Content">
              <h1>587</h1>
              <div className="Sats_detail">
                <IoBarbellSharp className="Sats_Emoji" />
                <p>Gym Equipment</p>
              </div>
            </div>
            <div className="Satsfation_Content">
              <h1>748</h1>
              <div className="Sats_detail">
                <GiCoffeeCup className="Sats_Emoji" />
                <p>Cup of Coffee</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Trainer_Title">
          <h2>BEST TRAINER</h2>
          <h1>Our Professional Trainer</h1>
        </div>
        <div className="Slide_container">
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            responsive={[
              {
                breakpoint: 768, // Large screens (TVs, desktops)
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 320, // Large screens (TVs, desktops)
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
            ]}
          >
            {trainer}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Example;
