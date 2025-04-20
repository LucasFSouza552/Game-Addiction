import React from 'react'
import styled, { css } from 'styled-components';
import { FaUser, FaEnvelope, FaVenusMars, FaBirthdayCake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileCard = styled.div`
  background-color: var(--bgColor);
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Satoshi-Bold';
  color: white;
  text-align: center;
  margin-bottom: 20px;

&::before {
  content: '';
  display: block;
  width: 50px;
  height: 2px;
  background-color:var(--primaryColor);
  margin: 0px auto;
}

`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: 'Satoshi-Regular';
  font-size: 16px;
  color: white;
  margin-bottom: 10px;

  ${props => props.bold && css`
    font-weight: bold;
  `}

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
`;

export default function Dashboard({ account }) {
  const Navigate = useNavigate();
  return (
    <Section>
      <ProfileCard>
        <Title>Perfil</Title>
        <List>
          <ListItem bold>
            <FaUser />
            Nome de Usuário:
          </ListItem>
          <ListItem>{account.username}</ListItem>
          <ListItem bold>
            <FaEnvelope />
            E-mail:
          </ListItem>
          <ListItem>{account.email}</ListItem>
          <ListItem bold>
            <FaVenusMars />
            Sexo:
          </ListItem>
          <ListItem>{account.gender}</ListItem>
          <ListItem bold>
            <FaBirthdayCake />
            Data de Nascimento:
          </ListItem>
          <ListItem>{account.bornDate}</ListItem>
        </List>

      </ProfileCard>


      <ExitButton onClick={() => {
        localStorage.removeItem('account');
        Navigate('/login', { replace: true });
      }}>
        Sair

      </ExitButton>



    </Section>
  );
}


const ExitButton = styled.button`
  width: 10%;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Satoshi-Bold';
  font-size: 16px;
`;