import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.margin.medium};
  display: flex;
  width: 100%;
  gap: 3.2rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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

const Newsletter = () => {
  return (
    <div>
      <FormWrapper
        //   FIXME: Connect this to the right form
        action="https://getform.io/f/47044ea9-307a-48c4-9768-6d0775db5e10"
        method="POST"
        name="email-form"
      >
        <Wrapper>
          <label htmlFor="first name">first name</label>
          <input type="text" name="first name" placeholder="Joshua" />
        </Wrapper>

        <Wrapper>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            placeholder="hi@joshuagalinato.com"
          />
        </Wrapper>
      </FormWrapper>
      <Btn type="submit">subscribe</Btn>
    </div>
  )
}

export default Newsletter
