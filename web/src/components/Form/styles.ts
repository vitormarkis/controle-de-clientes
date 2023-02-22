import styled from "styled-components"

export const Container = styled.form``

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  border-radius: 3rem;

  input {
    margin-bottom: 2rem;
  }

  button:first-of-type {
    margin-top: 3rem;
  }
`

export const Label = styled.label`
  color: #999;
  margin: 0 0 0.5rem 0;
  font-size: 3.5rem;
`

export const Input = styled.input`
  padding: 1.5rem 2rem;
`

export const Legend = styled.legend``

export const Button = styled.button`
  cursor: pointer;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: #0f9;
  font-weight: 500;
  color: black;
`
