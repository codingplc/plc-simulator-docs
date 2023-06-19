import React from 'react';
import UsersMap from './Landing/UsersMap';
import Roadmap from './Landing/Roadmap';
import Hero from './Landing/Hero';
import Features from './Landing/Features';

export default function Landing() {
  return (
    <div>
      <Hero />
      <Features />
      <UsersMap />
      <Roadmap />
    </div>
  );
}
