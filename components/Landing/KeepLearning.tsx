import React from 'react';
import Link from 'next/link';
import { VIDEO_ID, rungsLink, sectionHeading } from './links';

const card = 'block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 transition-colors';
const cardTitle = 'mb-2 text-xl font-bold text-gray-900 dark:text-white';
const cardBody = 'text-gray-600 dark:text-gray-400';

export default function KeepLearning() {
  return (
    <section className="my-20 px-4 lg:px-0">
      <h2 className={sectionHeading}>Keep learning</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <a href={rungsLink('/courses/boolean-logic', 'landing_course')} target="_blank" rel="noopener noreferrer" className={card}>
          <h3 className={cardTitle}>Boolean Logic course ↗</h3>
          <p className={cardBody}>Free exercises that check your answer, from a single contact up to the start/stop motor circuit.</p>
        </a>
        <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer" className={card}>
          <h3 className={cardTitle}>The move, on YouTube ↗</h3>
          <p className={cardBody}>The four-minute video from the top of this page, with chapters for each step.</p>
        </a>
        <Link href="/docs" className={card}>
          <h3 className={cardTitle}>PLC Simulator Online documentation</h3>
          <p className={cardBody}>The Ladder Logic guides for PLC Simulator Online stay on this site.</p>
        </Link>
      </div>
    </section>
  );
}
