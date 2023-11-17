import React from 'react';

import BannerHome from 'components/BannerHome';
import FormularioContact from 'components/FormContact';
import Benefits from 'components/Benefits';
import Assessment from 'components/Assessment';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardsPrice from 'components/CardsPrice';


export default function Home() {
    return (
      <>
      <Header bg='transparent'></Header>
      <main>
        <BannerHome></BannerHome>

        <CardsPrice></CardsPrice>

        <Benefits></Benefits>

        <Assessment></Assessment>

        <FormularioContact></FormularioContact>
      </main>
      <Footer></Footer>
      </>
    );
}
