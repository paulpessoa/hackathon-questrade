"use client"

import './page.scss'

import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ReferModal from './components/ReferModal/ReferModal';

function Home() {
  return (
    <div className="Home">

      <section className="bannerHome">
        <section className="bannerHomeGlass">
          <div className="container">
            <div className="divl">
              <h1> Loans from $5,000 to $50,000 from the confort of your home</h1>
              <p>Permanently employed and paid trough a bank? LionLend is the fastest and most convenient way to acces cash, and the applications is 100% online. You could be <span className="text-highlight">approved in minutes</span></p>
              <Button className="button-primary" color="warning" variant="contained" href="/auth" size="medium" >Apply now</Button>
            </div>
            <div className="divr">
              <Image width={500} height={500} src="/images/woman-chart.png" alt="Banner 1" />
            </div>
          </div>
        </section>
      </section>

      <section className="sectionWay">
        <h2>Approval in minutes, Money the next day</h2>
        <p>What would you like to do?</p>
        <div className="cardsContainer container">
          <div className="cardWay">
            {/* <Image width={200} height={200} src="/images/icons/recruitment.png" alt="Search" /> */}
            <h3>Apply online</h3>
            <p>blablablabla</p>
          </div>

          <div className="cardWay">
            {/* <Image width={200} height={200} src="/images/icons/search.png" alt="Profile" /> */}
            <h3>Verify your info</h3>
            <p>blablablabla</p>
          </div>

          <div className="cardWay">
            {/* <Image width={200} height={200} src="/images/icons/schedule.png" alt="Schedule" /> */}
            <h3>Get your loan</h3>
            <p>blablabl ala lnala lanlanlanla lanalnal</p>
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
