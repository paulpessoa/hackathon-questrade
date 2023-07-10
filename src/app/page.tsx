"use client"

import './page.scss'

import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ReferModal from './components/ReferModal/ReferModal';

function Home() {
  return (
    <div className="Home">

      <section className="banner-home">
        <div className="banner-container">
          <div className="banner-text">
            <h1> Loans from $5,000 to $50,000 from the confort of your home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet hendrerit urna eu rutrum.</p>
            <Button color="warning" variant="contained" href="/score" size="medium" >Apply now</Button>
          </div>
          <div className="banner-image">
            <Image width={500} height={500} src="/images/woman-chart.png" alt="Banner 1" />
          </div>
        </div>
      </section>

      <section className="loan-steps">
        <h2>Approval in minutes, Money the next day</h2>
        <p>What would you like to do?</p>
        <div className="container cards">
          <div className="cardWay">
            <Image width={100} height={100} src="/images/entrevista-online.gif" alt="Apply online" />
            <h3>Apply online</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet hendrerit urna eu rutrum.</p>
          </div>

          <div className="cardWay">
            <Image width={100} height={100} src="/images/eficiencia.gif" alt="Verify your Score" />
            <h3>Verify your Score</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet hendrerit urna eu rutrum.</p>
          </div>

          <div className="cardWay">
            <Image width={100} height={100} src="/images/casa.gif" alt="Get your loan" />
            <h3>Get your loan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet hendrerit urna eu rutrum.</p>
          </div>
        </div>
      </section>

      <section className="refer-banner">

        <Image width={300} height={300} src="/images/refer-friend.png" alt="Banner 1" />
        <div className="refer-text">
          <h1> Invite friends & Earn $20 </h1>
          <ReferModal />
        </div>
      </section>

    </div>
  );
}

export default Home;
