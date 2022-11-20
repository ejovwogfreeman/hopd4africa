import React, { useState } from "react";
import "../css/Contact.css";

const Contact = ({ text, text2 }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const { firstname, lastname, email, subject, message } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
            <input
              type="text"
              placeholder="Your First Name"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Your First Name"
              value={lastname}
              name="lastname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Your First Name"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input
              type="text"
              placeholder="Your First Name"
              value={subject}
              name="subject"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="">Message</label>
            <textarea
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
        <p>{subject}</p>
        <p>{message}</p>
        <div className="row">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
