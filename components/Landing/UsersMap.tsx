import React from 'react';
import Image from 'next/image';
import userWorldMap from '../../svg/userWorldMap.svg';

export default function UsersMap() {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Join users from 187 countries
      </h2>
      <p className="mb-8 font-light lg:text-xl">
        Be part of a vibrant, worldwide network committed to mastering and innovating in the field
        of programmable logic controllers. Come, join the journey of knowledge exchange and skill
        enhancement with users from every corner of the world!
      </p>
      <Image priority src={userWorldMap} alt="User World Map" />

      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:pb-16 lg:pb-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5000+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">registered users</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25k+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">saved projects</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">400+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">users daily</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
