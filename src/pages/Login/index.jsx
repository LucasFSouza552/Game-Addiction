import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  return (
    <LoginContainer>
      <LoginBox>
        <h2>Entrar</h2>

        <label htmlFor="email">E-mail</label>
        <Input type="email" id="email" placeholder="Digite seu e-mail" />

        <label htmlFor="senha">Senha</label>
        <Input type="password" id="senha" placeholder="Digite sua senha" />

        <Button>Entrar</Button>

        <RegisterText>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </RegisterText>
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  font-family: "Satoshi-Bold";
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  label {
    font-weight: bold;
    margin-top: 10px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  background-color: #7A29E4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #A4DB06;
  }
`;

const RegisterText = styled.div`
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #4B0082;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
