import React from "react";
import "../css/General.css";
import Header3 from "../components/Header3";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
import img from "../assets/img1.jpg";

const Timeline = () => {
  return (
    <div>
      <ScrollToTop />
      <Header3 />
      <div className="timeline-comp">
        <div className="abs">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h1>HOPE4AFRICA</h1>
            <p>phone:</p>
            <p>234-803-744-8004</p>
            <p>Email:</p>
            <p>info@hope4africa.foundation</p>
            <p>Address</p>
            <p>
              134B. Calabar IKOM HIGH WAY, OPP AKAMKPA CHIEF MAGISTRATE COURT,
              AKAMKPA LOCAL GOVERNMENT AREA, CROSS RIVER STATE, NIGERIA.
            </p>
            <Link to="">VIEW TIMELINE</Link>
          </div>
        </div>
        <div className="why">
          <h1>WHY HOPE4AFRICA?</h1>
          <p>
            In West Africa, individuals and entire communities are struggling to
            survive because of a lack of basic needs. What started as a dream
            through God's grace became a reality.
          </p>
        </div>
        <div className="timeline-contents">
          <h1>Timeline</h1>
          <div className="contents">
            <div className="img">
              <img src={img} alt="" />
              <p>May/2021… “Hope4Africa”</p>
            </div>
            <div className="text">
              <p>
                After several discussions about the mechanics and logistics
                needed to help the children of the “House of Grace” monthly, a
                small team of committed souls was formed to start what has now
                grown to be called the “Hope4Africa” initiative.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="img">
              <img src={img} alt="" />
              <p>May/2021… The 1st “Food4Orphans”</p>
            </div>
            <div className="text">
              <p>
                After some discussion with the “Hope4Africa” team it was decided
                to not only provide a “bag of rice” to Grace’s “Food4Orphans”
                operation but to surprise her team and the many children by
                bringing to the “House of Grace” a bounty of fresh vegetables
                and many other foods for a special feast and celebration. <br />
                <br />​ The trek to the “House of Grace” in the Nigerian bush
                took nearly 5 hours and required the use of motorcycle
                transportation for the last leg of the trip. With groceries and
                supplies piled high upon several motorbikes the “Hope4Africa”
                team arrived in good spirits and were welcomed by an excited
                group of celebration attendees. ​<br />
                <br />​ With nearly 200 children attending the 1st “House of
                Grace” celebration the Hope4Africa team decided that they would
                make a monthly trip commitment to Grace’s team and to be
                supportive.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="img">
              <img src={img} alt="" />
              <p>May/2021 Rebuild className="text"ing the “House of Hope”</p>
            </div>
            <div className="text">
              <p>
                The rebuilding process was started for the “House of Hope”
                beginning with the demolition of the old church building and the
                removal of debris. <br />
                <br />​ Once completed the construction team began to
                manufacture and produce the tens of thousands of bricks that
                would be needed to rebuild God’s House.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="img">
              <img src={img} alt="" />
              <p>Jun/2021 The 1st “Celebrate4Hope”</p>
            </div>
            <div className="text">
              <p>
                Because of the large attendance and success experienced in May,
                the “Hope4Africa” team decided to challenge themselves to
                empower the disadvantaged children to remember to celebrate
                God’s unending promise of His Grace and Hope for their lives.{" "}
                <br />
                <br />
                The “Hope4Africa” team decided to provide and include new bibles
                and a traveling case to all the children who had a birthday
                during the current month… launching their “Bibles4Birthdays”
                project. <br />
                <br />​ The team then scheduled two “Celebrate4Hope” events in
                June. One at the “House of Grace” in the Nigerian bush country
                and the other at Cross River, Nigeria for Bishop David’s home
                church family, the “House of Juliette”. <br />
                <br />​ So now along with a special time of praise and prayer,
                dance, and even more added foods (including a “celebration cake”
                for all the children to share in a non-traditional treat), new
                Bibles and carrying cases are distributed to the children being
                honored in their birthday months.
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="img">
              <img src={img} alt="" />
              <p>Jun/2021 The 1st “Celebrate4Hope”</p>
            </div>
            <div className="text">
              <p>
                More bricks… At the same time, the building was re-engineered,
                and the initial foundational layout measurements were made.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="last-bar">
        <div className="text">
          <span>
            <p>Let's Get Social</p>
            <div className="icons">
              <a href="https://facebook.com">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com">
                <FaTwitterSquare />
              </a>
              <a href="https://instagram.com">
                <FaInstagramSquare />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin />
              </a>
            </div>
          </span>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
