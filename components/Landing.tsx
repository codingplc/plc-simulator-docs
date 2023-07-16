import React from 'react';
import UsersMap from './Landing/UsersMap';
import Roadmap from './Landing/Roadmap';
import Hero from './Landing/Hero';
import Features from './Landing/Features';
import Conveyor from './Landing/Conveyor';

export default function Landing() {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16">
      <Hero />
      <Features />
      <UsersMap />
      <Roadmap />
      <Conveyor />
    </div>
  );
}
