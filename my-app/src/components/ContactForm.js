import React from "react";
import "../styles/contactForm.scss";

const ContactForm = () => {
  return (
    <div>
      <form className="contact_form">
        <div className="contact_field">
          <label> Name:</label>
          <input className="contact_field_content" type="text" />
        </div>
        <div className="contact_field">
          <label> Email:</label>
          <input className="contact_field_content" type="email" />
        </div>
        <div className="contact_field">
          <label> Message</label>
          <textarea className="contact_field_content"></textarea>
        </div>
        <button className="contact_button">Send message</button>
      </form>
    </div>
  );
};
export default ContactForm;
