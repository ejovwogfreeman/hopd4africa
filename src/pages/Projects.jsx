import React from "react";
import "../css/General.css";
import img from "../assets/img1.jpg";
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
  return (
    <div className="container project">
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
      </div>
    </div>
  );
};

export default Projects;
