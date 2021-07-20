import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.margin.medium};
  display: flex;
  flex-direction: column;
  width: 100%;
`
const FieldsWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
`

const Newsletter = () => {
  return (
    <div>
      <FormWrapper
        action="https://letschatnownownow.us6.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="eaceeafc424265fb858e64767" />
        <input type="hidden" name="id" value="14ee4f1624" />
        <FieldsWrapper>
          <Wrapper>
            <label htmlFor="MERGE1">first name</label>
            <input type="text" name="MERGE1" placeholder="Joshua" id="MERGE1" />
          </Wrapper>

          <Wrapper>
            <label htmlFor="MERGE0">email</label>
            <input
              type="email"
              name="MERGE0"
              id="MERGE0"
              tab-index="-1"
              placeholder="hi@joshuagalinato.com"
            />
          </Wrapper>
        </FieldsWrapper>
        <Btn type="submit" name="submit" value="submit" />
      </FormWrapper>
    </div>
  )
}

export default Newsletter
