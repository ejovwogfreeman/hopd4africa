import React, { useState, useEffect } from "react";
import "../css/General.css";
import img from "../assets/img1.jpg";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8000/api/project");
      const data = await res.json();
      setProject(data.data);
    };
    getData();
  }, []);
  console.log(project);
  return (
    <div className="container project" style={{ color: "white" }}>
      <ScrollToTop />
      <div className="top">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h1>
            Projects and <br /> Programs
          </h1>
          <p>
            Hope4Africa is dedicated to making the lives of disadvantaged people
            in West Africa live better lives. We have multiple projects to help
            the people of this region become self-sufficient so they may thrive
            physically and spiritually in the lord. (Matthew 25:31-40)
          </p>
        </div>
      </div>
      <div className="next">
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Hope4Orphans</h3>
            <p>Providing HOPE, HOMES, and MEDICAL CARE for God's most needy.</p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>House of Hope Childrens HOPE Center</h3>
            <p>
              Hope4Africa has partnered with Godly Woman to oversee the 3
              Nigerian Children’s HOPE Centers that they currently support with
              the Hope4Africa Projects and Programs.
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>House of Angela Childrens HOPE Center</h3>
            <p>
              Hope4Africa has partnered with Godly Woman to oversee the 3
              Nigerian Children’s HOPE Centers that they currently support with
              the Hope4Africa Projects and Programs.
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Celebrate4Hope</h3>
            <p>
              Providing MONTHLY CELEBRATIONS of HOPE to the Children's HOPE
              Centers that are supported by the Hope4Africa Projects and
              Programs.
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Food4Orphans</h3>
            <p>Providing FOOD for God's most needy.</p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Other Projects</h3>
            <p>
              Other Projects include... Fashions from Africa (custom hand
              crafted fashion line), Jerusalema Dance Contect (the HOPE and JOY
              of artistic expression of God's favor), 5-Fold Ministries
              (supporting those that share the GOOD NEWS of Jesus Christ)
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Prosperity4Africa</h3>
            <p>
              Aug/2021… “Prosperity4Africa” Its Official… We are now Chicken
              Farmers Cluck Cluck Cluck… the chickens have arrived…
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Beds4Africa</h3>
            <p>Providing BEDS for God's most needy.</p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>Bibles4Birthdays</h3>
            <p>
              Providing BIBLES to God's most needy. Nearly 1000 BIBLES were
              gifted to God's Children, both young and old, in 2021.
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>House of Grace Childrens HOPE Center</h3>
            <p>
              Hope4Africa has partnered with Godly Woman to oversee the 3
              Nigerian Children’s HOPE Centers that they currently support with
              the Hope4Africa Projects and Programs.
            </p>
          </div>
        </div>
        <div className="cont">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3>House of Hope</h3>
            <p>
              Rebuilding the NEW HOUSE of HOPE Holiness and Worship Center and
              Campus
            </p>
          </div>
        </div>
        {project.map((x) => {
          return (
            <div className="cont" key={x.id} style={{ marginBottom: "30px" }}>
              <div>
                <img src={x.thumbnail} alt="" />
              </div>
              <div>
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                <hr />
                <p>
                  <Link
                    to={`/projects/${x.id}`}
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
