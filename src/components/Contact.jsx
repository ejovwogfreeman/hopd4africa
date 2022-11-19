import React from "react";
import "../css/Contact.css";

const Contact = ({ text, text2 }) => {
  return (
    <div className="contact-cont">
      <div className="logo">
        <h3>Hope4Afica</h3>
      </div>
      <p>
        {text}
        <br />
        {text2}
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
