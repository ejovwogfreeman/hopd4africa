import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-cont">
      <div className="logo">
        <h1>Hope4Afica</h1>
      </div>
      <p>
        Reach out with any questions or ideas and let the power of God work
        through you.{" "}
      </p>
      <form action="">
        <div className="row">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="Your First Name" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Your First Name" />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Your First Name" />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Your First Name" />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
