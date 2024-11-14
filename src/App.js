import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';


const Background = styled.div`
  background-image: url('https://faespsenar.com.br/wp-content/uploads/2023/01/Clima-BANNER.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  text-align: center;
`;

const WeatherCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 50px auto;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
`;

const App = () => {
  return (
    <Background>
      <Header />
      <WeatherCard>
        <h1>Clima de Hoje</h1>
        <p>Temperatura: 23°C</p>
        <p>Chuva: 80%</p>
        <p>Vento: 15 km/h</p>
      </WeatherCard>
      <Footer />
    </Background>
  );
};

export default App;
