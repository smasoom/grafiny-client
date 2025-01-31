import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CoursesCard from "./CoursesCard";
import styles from "./Courses.module.scss";

// import book from "/images/book.png";
// import bookmark from "/images/bookmark.png";
// import bookmarkA from "/images/bmActive.png";
// import backArrow from "/images/arrow.png";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  // const [BM, setBM] = useState(false);

  const fetchData = () => {
    fetch("/db/coursesRayyan.json")
      .then((res) => res.json())
      .then((resp) => setCoursesData(resp));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className={styles.coursesHero}>
      <div className={styles.coursesTitle}>
        <div className={styles.coursesTitleHeading}>
          <button onClick={() => navigate(-1)}>
            <img src="/images/arrow.png" alt="left arrow" className={styles.coursesFa} />
          </button>

          <div className={styles.coursesTitleText}>Courses</div>
        </div>
      </div>
      <div className={styles.coursesCardContainer}>
        {coursesData.map((data) => {
          return <CoursesCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
