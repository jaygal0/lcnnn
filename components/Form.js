import React from 'react'
import styled from 'styled-components'
import { SectionFlex } from '../styles'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.offWhite};
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
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
const Btn = styled.button`
  width: min-content;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};
  }
`

const Form = () => {
  return (
    <SectionFlex>
      <h2>let's chat</h2>
      <p>If you’ve got a /now page, I’d love to chat with you.</p>
      <FormContainer
        //   FIXME: Connect this to the right form
        action="https://getform.io/f/47044ea9-307a-48c4-9768-6d0775db5e10"
        method="POST"
        name="email-form"
      >
        <InputNameWrapper>
          <LabelFlex>
            <label htmlFor="first name">first name</label>
            <input type="text" name="first name" placeholder="Joshua" />
          </LabelFlex>
          <LabelFlex>
            <label htmlFor="surname">surname</label>
            <input type="text" name="surname" placeholder="Galinato" />
          </LabelFlex>
        </InputNameWrapper>

        <label htmlFor="email">email</label>
        <input type="email" name="email" placeholder="hi@joshuagalinato.com" />
        <label htmlFor="website">/now page</label>
        <input
          type="text"
          name="website"
          placeholder="joshuagalinato.com/now"
        />
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          placeholder="What's on your mind?"
          rows={7}
        ></textarea>
        <Btn type="submit">submit</Btn>
      </FormContainer>
    </SectionFlex>
  )
}

export default Form
