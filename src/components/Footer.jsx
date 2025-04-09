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
  padding: 60px 20px;
  background: #1a1a1a;
  color: #f5f5f5;
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Col = styled.div`
  flex: 1;
  min-width: 280px;
  width: 100%;
`;

const Title = styled.h6`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #f5f5f5;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 500;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
      color: #bef71b;
      transform: translateX(5px);
    }
  }

  &.contato:hover {
    color: #bef71b;
    transform: scale(1.1);
    font-weight: 900;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  }
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #f5f5f5;
  margin-top: 30px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: auto;
  filter: brightness(0.9);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
    filter: brightness(1.2);
  }

  @media (max-width: 480px) {
    width: 35px;
  }
`;

const Copyright = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #f5f5f5;
  line-height: 1.8;
  margin-top: 20px;
`;
