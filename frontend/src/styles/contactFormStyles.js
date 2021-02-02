import styled from "styled-components";

// * {box-sizing: border-box;}
export const ContactForm = styled.div` max-width: 510px;
  margin: 30px auto;
  `;

export const ContactFormContainer = styled.div`border: 1px solid #f5f5f5;
  padding: 35px;
  box-shadow: 2px 2px 10px 0 #f5f5f5;
  `; 

export const ContactFormParagraph = styled.p`margin: 0;
  text-align: left;
  `;

.contact-form__header h2{
  color: #4a4a4a;
}
.contact-form__header p{
  margin-bottom: 0;
  color: #4a4a4a;
  color: #311c56;
}
.contact-form__header{
  background: #f7f7f7;
  padding: 2px 35px 31px;
  margin: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
p {
  text-align: center;
  font-weight: 500;
}

input[type=text],input[type=email], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #311c56;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}
textarea{
  height: 140px;
}
input[type=submit]:hover {
    background-color: #140c23;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
.sucsess  {
  margin: 20px 0;
  border: 1px solid green;
  padding: 7px;
  font-weight: bold;
}

.error {
  margin: 20px 0;
  border: 1px solid red;
  padding: 7px;
  font-weight: bold;
}