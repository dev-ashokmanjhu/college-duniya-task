import React from "react";
import styled from "styled-components";
const Card = () => {
  return (
    <div className="cardcontainer">
      <div className="first">
        <img
          className="CollegeImg"
          src="https://images.shiksha.com/mediadata/images/1608298098php5uuM0z.jpeg"
          alt="college"
        />
        <h2 className="collegeName">
          National Institue of Technology -[NIT] Kurukshetra
        </h2>
        <p className="location">Kurkshtetra,Haryana</p>
        <div className="logocontainer">
          <IMG
            src="https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png"
            alt="logo"
            className="collegeLogo"
          />
        </div>
      </div>
      <div className="second">
        <div style={{ display: "flex", marginRight: "40%", padding: "5px" }}>
          <div className="fees">
            <span>50000</span>
            <br />
            <span>BE/B.Tech First Year</span>
          </div>
          <hr className="hr-vertical" />
          <div className="userRating">
            <span>8.3/10</span>
            <br />
            <span>Users Ratings</span>
          </div>
        </div>
        <hr />
        <div className="ranking">
          <div>
            <span>Ranked 50 Out of 300 NIRF</span>
          </div>
          <div>
            <span>Ranked 26 Out of 300 This Week</span>
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
