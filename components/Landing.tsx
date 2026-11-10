import React from 'react';
import Hero from './Landing/Hero';
import BringProject from './Landing/BringProject';
import Compare from './Landing/Compare';
import Faq from './Landing/Faq';
import KeepLearning from './Landing/KeepLearning';

/**
 * The home page while PLC Simulator Online moves to Rungs Studio. It answers, in order, the
 * reasons people gave for not moving (survey notes in RungsCallout.tsx): never heard of it, not
 * sure what is better, afraid to lose their projects.
 *
 * Temporary: once the simulator closes, this site redirects to rungs.dev. That is why it has
 * no analytics of its own; its links carry UTM tags that the Rungs PostHog project reads.
 */
export default function Landing() {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16">
      <Hero />
      <BringProject />
      <Compare />
      <Faq />
      <KeepLearning />
    </div>
  );
}
