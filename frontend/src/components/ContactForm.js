import React from 'react'
import '../styles/contactForm.scss'
import { ResponsiveDiv, ContainerDiv } from '../styles/responsiveContainer'
import { StyledImage } from '../styles/imageStyles'

const ContactForm = () => {
  return (
    <>
      {' '}
      <ContainerDiv>
        <ResponsiveDiv>
          <div className='hcenter'>
            <h2>
              {' '}
              Batex Instalprojekt <br />
            </h2>
            <StyledImage src='https://s3-us-west-1.amazonaws.com/welcome_apples/posts/1_card/apple.jpg' />
          </div>
        </ResponsiveDiv>
      </ContainerDiv>
      <div className='contact_form_container'>
        <form className='contact_form'>
          <div className='contact_field'>
            <label> Imię lub nazwa firmy:</label>
            <input className='contact_field_content' type='text' />
          </div>
          <div className='contact_field'>
            <label> Email:</label>
            <input className='contact_field_content' type='email' />
          </div>
          <div className='contact_field'>
            <label> Zapytanie:</label>
            <textarea className='contact_field_content messageField'></textarea>
          </div>
          <button className='contact_button'>Wyślij wiadomość</button>
        </form>
      </div>
    </>
  )
}
export default ContactForm

// import React, { useState } from 'react'

// const ContactForm = () => {
//   const [status, setStatus] = useState('Submit')
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('Sending...')
//     const { name, email, message } = e.target.elements
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     let response = await fetch('http://localhost:5000/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(details),
//     })
//     setStatus('Submit')
//     let result = await response.json()
//     alert(result.status)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='name'>Name:</label>
//         <input type='text' id='name' required />
//       </div>
//       <div>
//         <label htmlFor='email'>Email:</label>
//         <input type='email' id='email' required />
//       </div>
//       <div>
//         <label htmlFor='message'>Message:</label>
//         <textarea id='message' required />
//       </div>
//       <button type='submit'>{status}</button>
//     </form>
//   )
// }

// export default ContactForm

// <div className='hcenter'>
// <h2>
//   {' '}
//   Batex Instalprojekt <br />
//   Tadeusz Figat <br />
// </h2>
// ul. Grenadierów 21 <br />
// lok. 31 04-052
// <br />
// Warszawa <br />
// Tel. 22-810-95-59
// </div>
