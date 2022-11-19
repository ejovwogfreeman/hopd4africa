import React from "react";
import "../css/General.css";
import "../css/About.css";
import Header2 from "../components/Header2";
import Contact from "../components/Contact";
import Bible2 from "../components/Bible2";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/img1.jpg";

const About = () => {
  return (
    <div style={{ textAlign: "justify" }}>
      <ScrollToTop />
      <Header2 />
      <Bible2 />
      <div className="about-text">
        <div className="text">
          <h1>The Adventure Begins</h1>
          <p>
            In the spring of 2021 Bishop David and I re-connected once again and
            this time our chit-chat serendipitously turned to the great work
            being done by one of Bishop David’s previous church members, Grace
            Nwana. Bishop David shared that Grace was providing food, support,
            and encouragement to many orphan children in a remote bush village
            some 5 hours away from his home in Cross River, Nigeria. <br />{" "}
            <br />
            Helping the children of Africa has been my dream for many years and
            I was anxious to learn more about how I might be able to help Grace
            with her “mission of hope” in some way. <br /> <br />
            Over the next few weeks, our weekly connections seemed to be more
            and more focused on what it might take to be of some assistance to
            Grace and her orphan children. I soon learned that if I was to
            provide the funds for a “bag of rice” (cost would be about $70 USD)
            that it would help feed the orphan children of the “House of Grace”
            for nearly a month…
          </p>
          <Link to="">DONATE</Link>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="about-text2">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h1>The Great Storms</h1>
          <p>
            During our next call, I mentioned to Bishop David that while I had
            been praying for several days and nights for God’s direction that
            there had been a very terrible storm that had struck my hometown of
            Fresno, Ca. I told Bishop David it was the worst storm I had ever
            experienced in my lifetime… <br /> <br />
            Even so, I was excited to tell Bishop David that “with God's
            assistance” I would love to provide the funds for a “bag of rice”
            each month to the “House of Grace” and Grace’s orphan children to
            assist in their feeding… And that I was ready to get started that
            day… ​<br />
            <br />
            Bishop David, of course, was very grateful for the news but was
            unusually quiet this day. After a few moments of silence, Bishop
            David finally spoke and told me that there also had been a terrible
            storm in his hometown too last night and that the storm was so
            violent that it had torn his current “church building” to the ground
            while it was filled with the orphans and children sleeping inside of
            the church building alongside his home in Cross River, Nigeria.
            Bishop David shared that it was only by the “Grace of God” that the
            many orphans and children were not injured in the church building
            collapse. Bishop David was sad to report to me that the church
            building was “now beyond repair” after the terrible storm and would
            have to be leveled and demolished because of safety concerns. Bishop
            David also shared that this would now leave many orphans and
            children without proper housing.
          </p>
          <Link to="">DONATE</Link>
        </div>
      </div>
      <Contact
        text="Let’s Work Together"
        text2="Get in touch so we can start working together."
      />
    </div>
  );
};

export default About;
