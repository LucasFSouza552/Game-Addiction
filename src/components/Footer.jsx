import React from 'react';
import styled from 'styled-components';

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
          <SocialIcon src="/INSTAGRAM.png" alt="Instagram" />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="TWITTER.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="YOUTUBE.png" alt="YouTube" />
        </a>
      </Socials>

      <Copyright>
        <p>&copy; 2023 FAMINAS - Faculdade de Minas | Todos os direitos reservados.</p>
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
  background-color: #7A29E4;
`;

const Container = styled.div`
  flex-direction: row;
  gap: 50px;
`;

const Col = styled.div`

`;

const Title = styled.h6`

`;

const List = styled.ul`

`;

const ListItem = styled.li`

`;

const Description = styled.p`

`;

const Socials = styled.div`
`;

const SocialIcon = styled.img`

`;

const Copyright = styled.div`

`;
