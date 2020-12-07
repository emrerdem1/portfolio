import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./EmailCredit";

export const ContactForm = () => {
  useEffect(() => {
    init(USER_ID);
  }, []);

  const [inputValue, setInput] = useState({
    user_name: null,
    user_mail: null,
    user_gsm: null,
    user_subject: null,
    user_message: null,
  });

  const handleForm = ({ target }) =>
    setInput((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, inputValue, USER_ID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <div className="row contact-form__wrapper">
      <div className="col-12 col-lg-4 col-md-12 col-sm-12 contact-svg">
        <h2 className="contact-svg__title">Contact me!</h2>
        <p className="contact-svg__text">
          I love making acquaintance with new people!
        </p>
        <svg className="contact-svg__img"></svg>
      </div>
      <div className="col-12 col-lg-6 col-md-12 col-sm-12 form-container">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            onChange={handleForm}
          />
          <input
            type="text"
            name="user_mail"
            placeholder="Your e-mail"
            onChange={handleForm}
          />
          <input
            type="text"
            name="user_gsm"
            placeholder="Your contact number"
            onChange={handleForm}
          />
          <input
            type="text"
            placeholder="Subject..."
            name="user_subject"
            onChange={handleForm}
          />
          <textarea
            type="text"
            placeholder="Kindly let me know how can I help you."
            name="user_message"
            onChange={handleForm}
          ></textarea>
          <button type="submit" className="contact-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
