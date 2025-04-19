import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Register() {
  return (
    <RegisterContainer>
      <RegisterBox>
        <h2>Cadastre-se</h2>

        <label htmlFor="username">Nome de usuário</label>
        <Input type="text" id="username" placeholder="Digite seu nome de usuário" />

        <label htmlFor="email">E-mail</label>
        <Input type="email" id="email" placeholder="Digite seu e-mail" />

        <label htmlFor="password">Senha</label>
        <Input type="password" id="password" placeholder="Crie uma senha" />

        <label htmlFor="gender">Gênero</label>
        <Select id="gender">
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </Select>

        <label htmlFor="birthdate">Data de nascimento</label>
        <Input type="date" id="birthdate" />

        <Button>Cadastrar</Button>

        <LoginText>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </LoginText>
      </RegisterBox>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  font-family: "Satoshi-Bold";
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterBox = styled.div`
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

const Select = styled.select`
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

const LoginText = styled.div`
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #4a90e2;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
