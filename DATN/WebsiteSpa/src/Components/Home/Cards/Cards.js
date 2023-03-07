import React from "react";
import CardItem from "../CardItems";
import "./Cards.css";
import img from "./../../../assets/images/Balenciaga Fall 22 backstage by STYLEDUMONDE0K3A5050FullRes.webp";
import img2 from "./../../../assets/images/Gucci-Fall_Winter-2022-feature-image.jpg";
import img3 from "./../../../assets/images/louis-vuitton-aw21-index-1615404436.jpg";
import img4 from "./../../../assets/images/https-__aeworld.com_fashion_paris-fashion-week-dior-spring-summer-2021_-1024x682.jpeg";
import img5 from "./../../../assets/images/Cruise_2021-22_show_in_Dubai__CHANEL_5-H-2021.webp";
export default function Cards() {
  return (
    <div className="cards">
      <h1>About Shop</h1>
       <div className="hero-btns">
        {/* <Button
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
        </Button> */}
      </div>
      <br /> <br /> <br /> <br />
      <h6>Established 2022</h6>{" "}
      <h6>Purpose for Learning</h6>
      <h6>
        {" "}
        Slogan: "Let yourself be the one to decide what you will use and how you will
        live.”
      </h6>
    </div>
  );
}
