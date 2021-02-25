import React from 'react';
import Card from '../components/Card/Card';
import StarsRank from '../components/StarsRank/StarsRank';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <h1> Welcome to Gitreaders!</h1>
      <Card />
      <StarsRank />
      <Footer />
    </>
  );
};

export default HomePage;
