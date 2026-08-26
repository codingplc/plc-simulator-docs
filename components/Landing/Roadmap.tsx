import React from 'react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="my-16 pt-24 -mt-24">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Roadmap</h2>
      <p className="mb-8 font-light lg:text-xl">
        From a small learning tool in 2020 to a community-maintained open-source project today — and the next chapter for learning PLC programming in{' '}
        <a
          href="https://rungs.dev/?utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor&utm_content=roadmap_intro"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Rungs
        </a>
        . Join our{' '}
        <a href="https://discord.gg/puVcdjEp4G" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Discord server
        </a>{' '}
        to share your ideas and follow the journey.
      </p>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic ladder elements</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Implementation of the fundamental building blocks of Ladder Logic, introducing the use of basic elements such as contacts, coils, and branches to
            allow users to create basic PLC programs.
          </p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2021</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Version 1.0.0 release</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Following the initial launch, the 1.0.0 version introduced significant enhancements including adding remaining Ladder Logic functions, saving and
            sharing diagram functionalities, and converting the platform to a Progressive Web Application for improved accessibility.
          </p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UI redesign, drag &amp; drop for desktop</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Introduced a user interface redesign to visually display input and output values on ladder blocks, improving clarity. Also added a drag-and-drop
            feature for a more interactive desktop experience.
          </p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Documentation website</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Launched a comprehensive documentation website to assist users with Ladder Logic concepts and platform features.
          </p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2024</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PLC Simulator Online goes open-source</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            The simulator&apos;s source code was released to the community under an open-source license, inviting developers worldwide to contribute. Read the{' '}
            <a
              href="https://www.codingplc.com/blog/plc-simulator-online-goes-open-source"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              announcement
            </a>{' '}
            or visit the{' '}
            <a
              href="https://github.com/codingplc/plc-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              GitHub repository
            </a>
            .
          </p>
        </li>
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2026</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rungs — a new way to learn PLC programming</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            A modern browser PLC simulator built from scratch, with both visual ladder and structured-text editors, support for BOOL/DINT/REAL/array tags,
            real-time simulation, an integrated test runner, and Relay — an AI assistant that reads your code as you build. Try it at{' '}
            <a
              href="https://rungs.dev/?utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor&utm_content=roadmap_milestone"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              rungs.dev
            </a>
            .
          </p>
        </li>
      </ol>
    </section>
  );
}
