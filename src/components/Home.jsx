import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Top Colleges</h3>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
