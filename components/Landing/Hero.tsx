import React from 'react';
import Image from 'next/image';
import screenshot from '../../images/simulator-screenshot.png';

export default function Hero() {
  return (
    <section className="mt-16 mb-16">
      <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-5xl dark:text-white">
        PLC Simulator Online
      </h1>
      <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8">
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
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Run PLC Simulator Online
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <Image
          className="w-full rounded-lg shadow-lg"
          priority
          src={screenshot}
          alt="PLC Simulator Online screenshot"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
