import React from "react";
import "../styles/contactForm.scss";

const ContactForm = () => {
  return (
    <>
      <h2 className="hcenter">
        Zapytania można wysłać poprzez poniższy formularz
      </h2>

      <div className="contact_form_container">
        <form className="contact_form">
          <div className="contact_field">
            <label> Imię lub nazwa firmy:</label>
            <input className="contact_field_content" type="text" />
          </div>
          <div className="contact_field">
            <label> Email:</label>
            <input className="contact_field_content" type="email" />
          </div>
          <div className="contact_field">
            <label> Zapytanie:</label>
            <textarea className="contact_field_content messageField"></textarea>
          </div>
          <button className="contact_button">Wyślij wiadomość</button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
