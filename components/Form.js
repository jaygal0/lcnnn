import React, { useState } from 'react'
import styled from 'styled-components'
import { SectionFlex } from '../styles'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    padding: 3.2rem 0;
  }
`
const InputNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const LabelFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`
const Btn = styled.input`
  width: min-content;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: 'Archivo Black', sans-serif;
  text-transform: capitalize;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
  }
`

const Form = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [site, setSite] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    // e.preventDefault()
    // clearing the values
    setName('')
    setSurname('')
    setEmail('')
    setSite('')
    setMessage('')
  }

  return (
    <SectionFlex>
      <h2 id="form">let&apos;s chat</h2>
      <p>If you’ve got a /now page, I’d love to chat with you.</p>
      <FormContainer
        action="https://getform.io/f/00d8bd72-0c75-4380-801c-e3cc99b61ece"
        method="POST"
        name="email-form"
      >
        <InputNameWrapper>
          <LabelFlex>
            <label htmlFor="first-name">first name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Joshua"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelFlex>
          <LabelFlex>
            <label htmlFor="surname">surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Galinato"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </LabelFlex>
        </InputNameWrapper>

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="hi@joshuagalinato.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="website">/now page</label>
        <input
          type="text"
          name="website"
          id="website"
          placeholder="joshuagalinato.com/now"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          placeholder="What's on your mind?"
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Btn
          type="submit"
          name="submit"
          value="submit"
          onSubmit={handleSubmit}
        />
      </FormContainer>
    </SectionFlex>
  )
}

export default Form
