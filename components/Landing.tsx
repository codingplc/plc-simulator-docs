import React from 'react';
import UsersMap from './Landing/UsersMap';
import Roadmap from './Landing/Roadmap';
import Hero from './Landing/Hero';

export default function Landing() {
  return (
    <div>
      <Hero />
      <UsersMap />
      <Roadmap />
    </div>
  );
}
