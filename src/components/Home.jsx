import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { collegeData } from "../constants";

const Home = () => {
  const [colleges, setColleges] = useState(collegeData);
  const [sortedColleges, setSortedColleges] = useState(colleges);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...colleges].sort((a, b) => {
      if (a[key] < b[key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSortedColleges(sorted);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Top Colleges</h3>
      <div className="search">
        <input
          className="sort_btn input"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="search_btn  sort_btn"
          onClick={() => setSortedColleges(filteredColleges)}
        >
          Search
        </button>
      </div>
      <div className="sort">
        <button
          className="sort_btn"
          onClick={() => handleSort("collegedunia_rating")}
        >
          Sort by CollegeDunia Rating
        </button>
        <button className="sort_btn" onClick={() => handleSort("fees")}>
          Sort by Fees
        </button>
        <button className="sort_btn" onClick={() => handleSort("user_rating")}>
          Sort by User Rating
        </button>
      </div>
      <div className="cards">
        {sortedColleges.map((college) => (
          <Card key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Home;
