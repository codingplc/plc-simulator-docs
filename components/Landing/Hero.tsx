import React from 'react';
import Countdown from './Countdown';
import MigrationVideo from './MigrationVideo';
import { SIMULATOR, primaryButton, secondaryButton, studioLink } from './links';

export default function Hero() {
  return (
    <section className="mt-12 mb-16 px-4 lg:px-0">
      <Countdown />
      <h1 className="mb-6 mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl dark:text-white">
        PLC Simulator Online is moving to Rungs Studio
      </h1>
      <p className="mb-8 mx-auto max-w-3xl font-light text-center text-lg lg:text-xl text-gray-600 dark:text-gray-400">
        Rungs Studio is the new PLC simulator from the author of PLC Simulator Online. It&apos;s free, it runs in your browser, and your projects come
        with you.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <a href={studioLink('landing_hero')} target="_blank" rel="noopener noreferrer" className={primaryButton}>
          Open Rungs Studio ↗
        </a>
        <a href={SIMULATOR} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
          Keep using PLC Simulator Online ↗
        </a>
      </div>
      <div className="mx-auto max-w-4xl">
        <MigrationVideo />
      </div>
    </section>
  );
}
