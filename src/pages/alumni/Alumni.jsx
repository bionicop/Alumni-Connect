import "./alumni.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    const fetchAllAlumni = async () => {
      try {
        const res = await axios.get("http://localhost:8800/alumni");
        setAlumni(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAlumni();
  }, []);

  return (
    <div className="alumni" style={{flexDirection: "column"}}>
      <div className="header">
        <h1>Notable Alumni</h1>
      </div>
      <div className="alumni-list">
        {alumni.map((alumnus) => (
          <div className="alumnus" key={alumnus.id}>
            <img src={alumnus.profile_pic} alt={alumnus.profile_name} />
            <div className="alumnus-info">
              <h2>{alumnus.profile_name}</h2>
              <p>Course: {alumnus.course_done}</p>
              <p>Job: {alumnus.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
