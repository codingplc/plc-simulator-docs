import React from 'react';
import Image from 'next/image';
import { CLOSING_DAY_TEXT, SIMULATOR, sectionHeading, sectionLead } from './links';

const steps = [
  {
    title: 'Open your project',
    body: (
      <>
        Open{' '}
        <a href={SIMULATOR} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-700 dark:text-primary-400 hover:underline">
          PLC Simulator Online
        </a>{' '}
        with the project you want to keep. Saved projects and shared links open there until {CLOSING_DAY_TEXT}.
      </>
    ),
  },
  {
    title: 'Press “Open this project in Rungs Studio”',
    body: 'The button is in the dark bar at the top of the simulator. If something cannot be carried over exactly, you see what will differ first.',
  },
  {
    title: 'Carry on in Rungs Studio',
    body: 'Studio opens in a new tab with your rungs and variables in it. The copy in PLC Simulator Online stays as it is until the simulator closes.',
  },
];

export default function BringProject() {
  return (
    <section className="my-20 px-4 lg:px-0">
      <h2 className={sectionHeading}>Bring your project with you</h2>
      <p className={sectionLead}>One click, no account, nothing to install.</p>
      <ol className="mb-10 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title}>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 text-primary-800 font-bold dark:bg-primary-900 dark:text-primary-200">
              {index + 1}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mx-auto max-w-4xl grid gap-12">
        <figure>
          <Image
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            src="/images/migration/plc-simulator-button.jpg"
            alt="PLC Simulator Online with the “Open this project in Rungs Studio” button in the bar at the top"
            width={1600}
            height={900}
          />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">The button in PLC Simulator Online</figcaption>
        </figure>
        <figure>
          <Image
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            src="/images/migration/studio-project-opened.jpg"
            alt="The same motor and fan project open in Rungs Studio"
            width={1600}
            height={900}
          />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">The same project in Rungs Studio</figcaption>
        </figure>
      </div>
    </section>
  );
}
