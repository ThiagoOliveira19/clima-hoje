import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Todos os direitos reservados por Thiago &copy; 2024</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
