import React, { useState, useEffect } from 'react'
import '../styles/contactForm.scss'
import { ResponsiveDiv, ContainerDiv } from '../styles/responsiveContainer'
import { StyledImage } from '../styles/imageStyles'
import sunset1 from '../assets/sunset1.jpg'
import sunset2 from '../assets/sunset2.jpg'
import mountain1 from '../assets/mountain1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { messageChange, messageReset } from '../actions/messageActions'
import emailjs from 'emailjs-com'
import '../styles/button.scss'

const ContactForm = () => {
  const dispatch = useDispatch()

  const userMessage = useSelector((state) => state.userMessage.userMessageSent)
  const {
    name: userName,
    email: userEmail,
    message: userMessageContent,
  } = userMessage

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const messageSendHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, formMessage }))
  }
  const messageResetHandler = (e) => {
    e.preventDefault()
    dispatch(messageReset())
  }

  // EmailJS
  const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID

  const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }

  const emailJSSendHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message: formMessage }))
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        // setToastVersion('success')
        // setToastMessage('Message sent!')
      },
      function (error) {
        console.log('FAILED...', error)
        // setToastVersion('failure')
        // setToastMessage('Message was lost ;-(')
      }
    )
  }

  //

  useEffect(() => {
    if (userMessage) {
      setName(userName)
      setEmail(userEmail)
      setFormMessage(userMessageContent)
    }
  }, [userEmail, userMessageContent, userName, userMessage])

  return (
    <>
      {' '}
      <div className='contact_form_container'>
        <form className='contact_form'>
          <div className='contact_field'>
            <label> Imię lub nazwa firmy:</label>
            <input
              className='contact_field_content'
              type='text'
              value={name}
              placeholder='Wpisz swoje imię/nazwę podmiotu'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='contact_field'>
            <label> Email:</label>
            <input
              className='contact_field_content'
              type='email'
              value={email}
              placeholder='Wpisz email kontaktowy'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='contact_field'>
            <label> Wiadomość:</label>
            <textarea
              className='contact_field_content messageField'
              value={formMessage}
              placeholder='Wpisz wiadomość'
              onChange={(e) => setFormMessage(e.target.value)}
            ></textarea>
          </div>
          <div className='send_button_wrapper'>
            <button className='send_button' onClick={emailJSSendHandler}>
              Wyślij
            </button>

            <button className='send_button' onClick={messageSendHandler}>
              Zapisz
            </button>
            <button className='send_button' onClick={messageResetHandler}>
              Zresetuj
            </button>
          </div>
        </form>{' '}
      </div>
    </>
  )
}
export default ContactForm
