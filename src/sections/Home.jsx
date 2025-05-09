import React from 'react'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'

const Home = () => {
  return (
    <section className="scroll-m-16 px-8 max-sm:px-4 py-8" id='home'>
      <HeroSection />
      <IntroSection />
    </section>
  );
}

export default Home