import React from 'react';
import Image from 'next/image';
import userWorldMap from '../../svg/userWorldMap.svg';

export default function UsersMap() {
  return (
    <section className="mb-8">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Join users from 187 countries
      </h2>
      <p className="mb-8 font-light lg:text-xl">
        Be part of a vibrant, worldwide network committed to mastering and innovating in the field
        of programmable logic controllers. Come, join the journey of knowledge exchange and skill
        enhancement with users from every corner of the world!
      </p>
      <Image priority src={userWorldMap} alt="User World Map" />
    </section>
  );
}
