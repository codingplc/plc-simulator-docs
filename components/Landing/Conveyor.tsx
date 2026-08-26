import React from 'react';
import Image from 'next/image';

export default function Conveyor() {
  return (
    <section className="my-8 hidden sm:block">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Try our Conveyor Simulator!
      </h2>
      <div className="gap-8 items-center py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-8">
        <div className="mt-4 md:mt-0 mb-8">
          <p className="mb-6 font-light md:text-lg">
            A legacy companion to PLC Simulator Online — write a Ladder Logic program, hit simulate,
            and watch the machine model react. Great for visualizing real-world I/O behavior and
            sharing your finished project with others.
          </p>
          <p className="mb-6 font-light md:text-lg">
            Have fun with it. Don&apos;t worry, you can&apos;t break it.
          </p>
          <div className="flex justify-center py-4">
            <a
              href="https://app2.codingplc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            >
              Try conveyor simulator ↗
            </a>
          </div>
        </div>
        <Image
          className="w-full hidden sm:flex rounded-lg shadow-lg"
          src="/images/conveyor-simulator.jpg"
          alt="PLC Simulator Online screenshot"
          priority
          width={718}
          height={716}
        />
      </div>
    </section>
  );
}
