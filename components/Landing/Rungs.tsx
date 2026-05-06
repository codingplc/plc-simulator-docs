import React from 'react';

export default function Rungs() {
  return (
    <section className="my-16">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:text-3xl dark:text-white">
        Meet rungs.dev — learn PLC programming with AI assistance
      </h2>
      <p className="mb-10 font-light text-center lg:text-xl text-gray-600 dark:text-gray-400">
        A browser-based Ladder Logic and Structured Text simulator modeled on Rockwell&apos;s Studio 5000 Logix Designer&reg; — tag types, instruction names,
        expression evaluation, and program structure follow its conventions, so concepts you learn in Rungs transfer directly to industry tools.
      </p>

      <div className="mb-10 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <video
          className="w-full"
          src="/video/studio-demo-dark.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <div className="pb-8 mx-auto sm:pb-16">
        <div className="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-2-9l-4 12" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Visual and text-based editors</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Visual Ladder Logic editor with XIC, XIO, OTE, timers, and counters — plus a full Structured Text editor supporting IF/THEN, CASE, FOR, and WHILE.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zm7 10l1 2.6 2.6 1-2.6 1L19 19l-1-2.4-2.6-1 2.6-1L19 12zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Relay AI assistant</h3>
            <p className="text-gray-500 dark:text-gray-400">
              An AI assistant that reads your code as you build. Explains behavior, surfaces compiler warnings, and suggests next steps in context.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Tags, trends &amp; tests</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Full tag database for BOOL, DINT, REAL and arrays. Trend charts for tag values over time. Automated test runner for Add-On Instructions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-2">
        <a
          href="https://studio.rungs.dev/?utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor&utm_content=rungs_section_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
        >
          Try it at studio.rungs.dev ↗
        </a>
      </div>

      <p className="mt-8 mx-auto max-w-3xl text-[15px] text-center italic font-light text-gray-500 dark:text-gray-500">
        Rockwell Automation, Allen-Bradley, Logix Designer, and Studio 5000 are trademarks or registered trademarks of Rockwell Automation, Inc. rungs.dev is
        not affiliated with, authorized, or endorsed by Rockwell Automation.
      </p>
    </section>
  );
}
