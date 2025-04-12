import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Col>
          <Title>Endereço e Contato:</Title>
          <List>
            <ListItem>Av. Cristiano Ferreira Varella, 655 - Bom Pastor</ListItem>
            <ListItem>Muriaé - MG, CEP: 36880-000</ListItem>
            <ListItem className="contato">
              <a href="mailto:contato@faminas.edu.br">contato@faminas.edu.br</a>
            </ListItem>
          </List>
        </Col>

        <Col>
          <Title>Horário de Funcionamento:</Title>
          <List>
            <ListItem>Segunda a Sexta: 07:30 - 22:00</ListItem>
            <ListItem>Sábado: 08:00 - 12:00</ListItem>
            <ListItem>Secretaria: 08:00 - 18:00 (segunda a sexta)</ListItem>
          </List>
        </Col>
      </Container>

      <Socials>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </Socials>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} FAMINAS - Faculdade de Minas | Todos os direitos reservados.</p>
      </Copyright>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 20px;
  background-color: #eeeeee45;
`;

const Container = styled.div`
  flex-direction: row;
  gap: 50px;
`;

const Col = styled.div`

`;

const Title = styled.h6`
  font-family: "Satoshi-Bold";
  font-size: 20px;
`;

const List = styled.ul`
  list-style: None;
`;

const ListItem = styled.li`
  font-family: "Satoshi-Regular";
`;

const Description = styled.p`
  font-family: "Satoshi-Regular";
`;

const Socials = styled.div`
  flex-direction: row;
  font-size: 25px;
  gap: 15px;
  margin-top: 30px;
`;

const SocialIcon = styled.img`

`;

const Copyright = styled.div`
  font-size: 10px;
`;
