import React from "react";
import styled from "styled-components";
import { RxVideo } from "react-icons/rx";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdHomeWork } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Card = () => {
  return (
    <div className="cardcontainer">
      <div className="first">
        <img
          className="CollegeImg"
          src="https://images.shiksha.com/mediadata/images/1608298098php5uuM0z.jpeg"
          alt="college"
        />
        <div style={{ lineHeight: "1" }}>
          <h2 className="collegeName">
            National Institue of Technology -[NIT] Kurukshetra
          </h2>
          <p className="location">
            <GoLocation /> Kurkshtetra,Haryana
          </p>
          <div className="logocontainer">
            <IMG
              src="https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png"
              alt="logo"
              className="collegeLogo"
            />
          </div>
        </div>
        <div className="icons">
          <div className="media">
            <div className="gallary">
              <HiOutlinePhotograph />
              <span style={{ fontWeight: "700", margin: "0 5px" }}>17</span>
            </div>
            <div className="video">
              <RxVideo />
              <span style={{ fontWeight: "700", margin: "0 5px" }}>5</span>
            </div>
          </div>
          <div className="rate">
            <MdHomeWork className="work-icon" />
            <div className="ratingTop">
              <span style={{ fontSize: "15px" }}>CollegeDunia Rating</span>
              <br />
              <span style={{ fontSize: "20px" }}>7.5 /10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div
          style={{
            display: "flex",
            marginRight: "40%",
            padding: "5px",
          }}
        >
          <div className="fees">
            <span
              style={{
                color: "#ff7900",
                fontSize: "1rem",
              }}
            >
              ₹ 50000
            </span>
            <br />
            <span>BE/B.Tech First Year</span>
          </div>
          <hr className="hr-vertical" />
          <div className="userRating">
            <span style={{ color: "#ff7900", fontSize: "1rem" }}>8.3/10</span>
            <br />
            <span>Users Ratings</span>
          </div>
        </div>
        <hr style={{ border: "1px solid rgb(219, 219, 219)" }} />
        <div className="ranking">
          <div>
            <span>
              Ranked 50 Out of 300 <br /> NIRF
            </span>
          </div>
          <div>
            <span>
              Ranked 26 Out of 300 <br /> This Week
            </span>
          </div>
        </div>
        <div className="Links">
          <p>Admisson 2022 </p>
          <p>Reviews </p>
          <p>Courses & Fees </p>
        </div>
        <div className="btns">
          <button className="btn btn1">Apply Now</button>
          <button className="btn btn2">BROCHURE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

const IMG = styled.img``;
