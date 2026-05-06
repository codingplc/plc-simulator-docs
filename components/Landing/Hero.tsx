import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mt-16 mb-8">
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-5xl dark:text-white">
        PLC Simulator Online
      </h1>
      <div className="gap-8 items-center py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-8">
        <div className="mt-4 md:mt-0 mb-8">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Learning Ladder Logic was never easier than now!
          </h2>
          <p className="mb-4 font-light md:text-lg">
            A free, browser-based Ladder Logic simulator for learning PLC programming — used by 250,000+ students, hobbyists, and engineers every year.
          </p>
          <p className="mb-6 font-light md:text-lg">
            Looking for more? Try{' '}
            <a
              href="https://rungs.dev/?utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor&utm_content=hero_inline"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-700 dark:text-primary-400 hover:underline"
            >
              rungs.dev
            </a>
            , our new AI-assisted simulator with Ladder Logic, Structured Text, and a full tag database — modeled on Allen-Bradley&apos;s Logix Designer&reg;.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="https://app.plcsimulator.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
              Run PLC Simulator Online ↗
            </a>
            <a
              href="https://rungs.dev/?utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor&utm_content=hero_secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-primary-800 dark:text-primary-300 bg-transparent border-2 border-primary-800 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
              Try rungs.dev ↗
            </a>
          </div>
        </div>
        <Image
          className="w-full hidden sm:flex rounded-lg shadow-lg"
          src="/images/simulator-sc-desk.jpg"
          alt="PLC Simulator Online screenshot"
          priority
          width={803}
          height={565}
        />
        <Image
          className="w-full flex sm:hidden rounded-lg shadow-lg max-w-xs mx-auto"
          src="images/simulator-sc-mobile.jpg"
          alt="PLC Simulator Online screenshot"
          priority
          width={320}
          height={543}
        />
      </div>
    </section>
  );
}
