import React from 'react'
import styled from 'styled-components'

export default function Login() {
  return (
    <LoginContainer>
      <Form action="">

        <div>
          <h1>Entrar</h1>

          <InputFieldContainer label="E-mail:" type="email" placeholder={"Digite seu e-mail"} />

          <InputFieldContainer label="Senha:" type="password" placeholder={"Digite sua senha"} />

        </div>

      </Form>

      <div>
        <img src="#" alt="imagem representatativa" />
      </div>
    </LoginContainer>
  )
}


const InputFieldContainer = ({ label, type, placeholder }) => {
  return (<InputContainer>
    <StyledLabel htmlFor={type}>{label}</StyledLabel>
    <StyledInput type={type} name={type} id={type} placeholder={placeholder} />
  </InputContainer>)
}

const StyledLabel = styled.label`
    color: white;
    font-family: "Satoshi-Bold";
    position: relative;
    background-color: #8E24E9;
    top: 13px;
    left: 10px;
    width: max-content;
    padding: 0px 10px;
`;

const StyledInput = styled.input`
    background-color: transparent;
    border: solid 1px white;
    border-radius: 10px;
    padding: 15px;
    color: white;
    width: 100%;
    font-family: "Satoshi-Bold"; 

    &::placeholder{
        color: white;
        font-family: "Satoshi-Light"
    }

    &:focus {
        outline: none;
    }

`;

const InputContainer = styled.div`
  position: relative;
`;




const LoginContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 10px 0px;
  width: 100%;
  color: white;
`;

const Form = styled.form`
  border: solid 1px white;
  border-radius: 10px;
  margin: 0px;
  padding: 10% 10%;

  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

