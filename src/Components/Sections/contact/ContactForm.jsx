import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID, RECAPTCHA_KEY } from "./EmailCredit";
import Reaptcha from "reaptcha";

export const ContactForm = () => {
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [inputValue, setInput] = useState({
    user_name: null,
    user_mail: null,
    user_gsm: null,
    user_subject: null,
    user_message: null,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    init(USER_ID);
  }, []);

  const handleForm = ({ target }) =>
    setInput((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });

  const sendEmail = (e) => {
    e.preventDefault();
    if (isRecaptchaVerified) {
      console.log(
        "verified,",
        SERVICE_ID,
        TEMPLATE_ID,
        inputValue,
        USER_ID,
        emailjs
      );
      /*emailjs.send(SERVICE_ID, TEMPLATE_ID, inputValue, USER_ID).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );*/
    } else {
      console.log("not verified");
    }
  };

  const onVerify = (recaptchaResponse) => {
    if (!recaptchaResponse) {
      return;
    }

    setIsRecaptchaVerified(true);
  };

  const handleSubmit = (fieldValues) => {
    console.log(fieldValues);
  };

  return (
    <>
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
            <button
              type="submit"
              className="contact-button"
              disabled={!isRecaptchaLoaded}
            >
              Send
            </button>

            <Reaptcha
              theme="dark"
              sitekey={RECAPTCHA_KEY}
              onLoad={() => setIsRecaptchaLoaded(true)}
              onVerify={onVerify}
              className="formRecaptcha"
            />
          </form>
        </div>
      </div>
      <div className="row contact-form__wrapper">
        <div className="col-12 col-lg-6 col-md-12 col-sm-12 form-container">
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item label="Name">
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item label="E-mail">
              <Input placeholder="Your e-mail" />
            </Form.Item>
            <Form.Item label="Contact number">
              <Input placeholder="Your contact number" />
            </Form.Item>
            <Form.Item label="Subject">
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item label="Message">
              <Input.TextArea placeholder="Kindly let me know how can I help you." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="contact-button">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
