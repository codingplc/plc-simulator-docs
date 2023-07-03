import React from 'react';

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
          <p className="mb-6 font-light md:text-lg">
            PLC simulator online answers the lack of simple and free Programmable Ladder Controller
            coding application. We are working on a tool you can use to improve and share your
            programming knowledge. Save yourself time and money.
          </p>
          <a
            href="https://app.plcsimulator.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            Run PLC Simulator Online ↗
          </a>
        </div>
        <img
          className="w-full hidden sm:flex rounded-lg shadow-lg"
          src="/images/simulator-sc-desk.png"
          alt="PLC Simulator Online screenshot"
          width={803}
          height={565}
        />
        <img
          className="w-full flex sm:hidden rounded-lg shadow-lg max-w-xs mx-auto"
          src="images/simulator-sc-mobile.png"
          alt="PLC Simulator Online screenshot"
          width={320}
          height={543}
        />
      </div>
    </section>
  );
}
