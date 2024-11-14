import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Clima Hoje - Projetado por Thiago</Title>
    </HeaderWrapper>
  );
};

export default Header;
