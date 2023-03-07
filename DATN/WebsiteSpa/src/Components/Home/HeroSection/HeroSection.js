import { Button } from "../Button/Button";
import React, { useRef, useEffect } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import "../Home.css";
import img from "../../../assets/images/bnpf4.webp";
export default function HeroSection() {
  // const vidRef = useRef();

  // useEffect(() => {
  //   vidRef.current.play();
  // }, []);
  return (
    <div className="hero-container">
      {/* <video ref={vidRef} autoPlay loop muted>
        <source
          src={require("../../../assets/videos/video.mp4")}
          type="video/mp4"
        />
      </video> */}
      <img className="img_back" src={img}/>
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link className="shop" to="/about">
            ABOUT SHOP
          </Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link className="shop" to="/products">
            SHOPPING NOW <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </Button>
      </div>
      <br /> <br /> <br /> <br />
      <h6>“Don't follow the trend.</h6>{" "}
      <h6>Don't make yourself dependent on fashion.</h6>
      <h6>
        {" "}
        Let yourself be the one to decide what you will wear and how you will
        live.”
      </h6> */}
    </div>
  );
}
