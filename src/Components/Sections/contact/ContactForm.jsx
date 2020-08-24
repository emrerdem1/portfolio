import React, { useState } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./EmailCredit";

export const ContactForm = () => {
  const [inputValue, setInput] = useState({
    name: "empty",
    mail: "empty",
    gsm: "empty",
    subject: "empty",
    message: "empty",
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
      <div className="col-12 col-md-4 col-sm-12 contact-svg">
        <h2 className="contact-svg__title">Contact me!</h2>
        <p className="contact-svg__text">
          I love making acquaintance with new people!
        </p>
        <svg
          className="contact-svg__img"></svg>
      </div>
      <div className="col-12 col-md-6 col-sm-12 form-container">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleForm}
          />
          <input
            type="text"
            name="mail"
            placeholder="Your e-mail"
            onChange={handleForm}
          />
          <input
            type="text"
            name="gsm"
            placeholder="Your contact number"
            onChange={handleForm}
          />
          <input
            type="text"
            placeholder="Subject..."
            name="subject"
            onChange={handleForm}
          />
          <textarea
            type="text"
            placeholder="Kindly let me know how can I help you."
            name="message"
            onChange={handleForm}
          ></textarea>
          <button
            type="submit"
            value="Submit"
            className="contact-button"
            onSubmit={sendEmail}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
