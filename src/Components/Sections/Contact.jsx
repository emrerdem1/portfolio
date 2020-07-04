import React from "react";
import { Wave } from "./ContactComponents/Wave";
import { ContactForm } from "./ContactComponents/ContactForm";

export const Contact = () => {
  return (
    <div className="container" id="contact-section">
      <Wave />
      <ContactForm />
    </div>
  );
};
