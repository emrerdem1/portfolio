import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID, RECAPTCHA_KEY } from "./EmailCredit";
import Reaptcha from "reaptcha";
import "antd/es/message/style/index.css";

export const ContactForm = () => {
  const [form] = Form.useForm();

  const captchaItem = useRef();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  useEffect(() => {
    init(USER_ID);
  }, []);

  const onVerify = (recaptchaResponse) => {
    if (!recaptchaResponse) {
      return;
    }

    setIsRecaptchaVerified(true);
  };

  const handleSubmit = (values) => {
    if (isRecaptchaVerified) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
      message.success("Your message is sent successfully.");
      form.resetFields();
      captchaItem.current.reset();
    } else {
      message.warning("Please confirm you are a beautiful human.");
    }
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "This is not a valid email!",
      number: "This is not a valid number!",
    },
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
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item
            label="E-mail"
            name="user_mail"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Your e-mail" />
          </Form.Item>
          <Form.Item label="Contact" name="user_gsm">
            <Input placeholder="Your contact number" />
          </Form.Item>
          <Form.Item
            name="user_subject"
            label="Subject"
            rules={[
              {
                required: true,
                message: "Please enter your email for me to reply you later.",
              },
            ]}
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="user_message"
            label="Message"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder="Kindly let me know how can I help you." />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              htmlType="submit"
              className="contact-button"
              disabled={!isRecaptchaLoaded}
            >
              Send
            </Button>
            <Reaptcha
              theme="dark"
              ref={captchaItem}
              sitekey={RECAPTCHA_KEY}
              onLoad={() => setIsRecaptchaLoaded(true)}
              onVerify={onVerify}
              onExpire={() => setIsRecaptchaVerified(false)}
              className="formRecaptcha"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
