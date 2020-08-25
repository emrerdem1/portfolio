import React from "react";
import { Wave } from "./Wave";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="container" id="contact-section">
      <Wave />
      <ContactForm />
    </div>
  );
};
