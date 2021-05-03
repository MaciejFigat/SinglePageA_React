import React, { useState, useEffect } from 'react'
import '../styles/contactForm.scss'
import Toast from '../components/Toast'
import { ResponsiveDiv, BigContainerDiv } from '../styles/responsiveContainer'
import { useDispatch, useSelector } from 'react-redux'
import { messageChange, messageReset } from '../actions/messageActions'
import emailjs from 'emailjs-com'
import '../styles/button.scss'
import Loader from 'react-loader-spinner'

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
  const [toastVersion, setToastVersion] = useState('none')
  const [toastMessage, setToastMessage] = useState('')
  const [spinnerVisible, setSpinnerVisible] = useState(false)

  const messageSaveHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message: formMessage }))
    setToastVersion('saved')
    setToastMessage('Dane zapisane tymczasowo w aplikacji')
  }
  const messageResetHandler = (e) => {
    e.preventDefault()
    dispatch(messageReset())
    setToastVersion('reset')
    setToastMessage('Formularz zresetowany')
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
    setSpinnerVisible(true)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function () {
        setToastVersion('success')
        setSpinnerVisible(false)
        setToastMessage('Wiadomość wysłana!')
      },
      function () {
        setToastVersion('failure')
        setSpinnerVisible(false)
        setToastMessage('Nie udało się wysłać wiadomości')
      }
    )
  }

  //toast
  const toastNone = (e) => {
    e.preventDefault()
    setToastVersion('none')
  }
  //

  useEffect(() => {
    if (userMessage) {
      setName(userName)
      setEmail(userEmail)
      setFormMessage(userMessageContent)
    }
    const timer = setTimeout(() => {
      setToastVersion('none')
    }, 3000)
    return () => clearTimeout(timer)
  }, [toastVersion, userEmail, userMessageContent, userName, userMessage])

  return (
    <BigContainerDiv>
      <div onClick={toastNone}>
        <Toast toastMessage={toastMessage} toastVersion={toastVersion} />
      </div>
      <ResponsiveDiv>
        {' '}
        <div className='contact_form_container'>
          <Loader
            type='ThreeDots'
            color='var(--color2-secondary)'
            height={20}
            width={60}
            visible={spinnerVisible}
          />
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

              <button className='send_button' onClick={messageSaveHandler}>
                <i className='fas fa-save'></i>
              </button>
              <button className='send_button' onClick={messageResetHandler}>
                <i className='fas fa-trash-alt'></i>
              </button>
            </div>
          </form>{' '}
        </div>
      </ResponsiveDiv>
    </BigContainerDiv>
  )
}
export default ContactForm
