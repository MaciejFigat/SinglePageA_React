import React, { useState, useEffect } from 'react'
import '../styles/contactForm.scss'
import { ResponsiveDiv, ContainerDiv } from '../styles/responsiveContainer'
import { StyledImage } from '../styles/imageStyles'
import sunset1 from '../assets/sunset1.jpg'
import sunset2 from '../assets/sunset2.jpg'
import mountain1 from '../assets/mountain1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { messageChange, messageReset } from '../actions/messageActions'

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
  const [message, setUserMessage] = useState('')

  const messageSendHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message }))
  }
  const messageResetHandler = (e) => {
    e.preventDefault()
    dispatch(messageReset())
  }

  // const submitExerciseDurationHandler = (e) => {
  //   e.preventDefault()
  //   setExerciseDuration(e.target.value)
  // }

  useEffect(() => {
    if (userMessage) {
      setName(userName)
      setEmail(userEmail)
      setUserMessage(userMessageContent)
    }
  }, [userMessage, userEmail, userMessageContent, userName])

  return (
    <>
      {' '}
      <ContainerDiv>
        <ResponsiveDiv>
          <div className='hcenter'>
            <StyledImage src={sunset1} width='33%' height='88%' />
            <StyledImage src={mountain1} width='33%' height='88%' />
            <StyledImage src={sunset2} width='33%' height='88%' />
          </div>
        </ResponsiveDiv>
      </ContainerDiv>
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
              value={message}
              placeholder='Wpisz wiadomość'
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
          </div>
          <button className='contact_button' onClick={messageSendHandler}>
            Wyślij wiadomość
          </button>
          <button className='contact_button' onClick={messageResetHandler}>
            Zresetuj wiadomość
          </button>
        </form>
      </div>
    </>
  )
}
export default ContactForm
