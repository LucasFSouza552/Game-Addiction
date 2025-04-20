import React from 'react'
import styled, { css } from 'styled-components';
import { FaUser, FaEnvelope, FaVenusMars, FaBirthdayCake } from 'react-icons/fa';

const ProfileCard = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-family: 'Satoshi-Bold';
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: 'Satoshi-Regular';
  font-size: 16px;
  color: #555;
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
  height: 100vh;
`;

export default function Dashboard({ account }) {
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
    </Section>
  );
}

