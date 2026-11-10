import React from 'react';
import { primaryButton, sectionHeading, sectionLead, studioLink } from './links';

// Checked against both codebases on 2026-11-07 (rungs-videos, move-from-plc-simulator/NOTES.md).
// The last row is there because it is true: this table is not only the rows Studio wins.
const rows: [string, string, string][] = [
  ['Languages', 'Ladder Diagram', 'Ladder Diagram and Structured Text'],
  ['Ladder instructions', '26', 'About 70'],
  ['Data types', 'Bool, Number, Timer, Counter', 'BOOL, SINT, INT, DINT, REAL, STRING, TIMER, COUNTER'],
  ['Arrays', 'No', 'Yes, up to 8,192 elements'],
  ['Bits of an integer', 'No', 'Yes: Word.0 to Word.31, each usable as a BOOL'],
  ['Running your program', 'Start and stop', 'Start, pause, step one scan at a time, stop'],
  ['Watching values', 'On the diagram', 'On the diagram, in a Trend chart and in an I/O panel'],
  ['Tests', 'No', 'Yes: write tests for your logic and run them'],
  ['AI assistant', 'No', 'Relay, which explains your logic and your errors'],
  ['Saving and sharing', 'One project in the browser; sharing needs an account', 'Save to a file, export .L5X, share a link with no account'],
  ['Learning', 'Documentation and a tutorial video', 'Over 100 exercises in 11 courses, with the first course free'],
  ['Works offline', 'Yes', 'No'],
];

export default function Compare() {
  return (
    <section className="my-20 px-4 lg:px-0">
      <h2 className={sectionHeading}>What changes when you move</h2>
      <p className={sectionLead}>The same rungs run in both. Rungs Studio works more like a real PLC.</p>
      <div className="overflow-x-auto mx-auto max-w-5xl rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full table-fixed md:table-auto text-left text-sm md:text-base text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
            <tr>
              <th scope="col" className="w-[28%] md:w-auto px-3 md:px-4 py-3 font-semibold">
                <span className="sr-only">Feature</span>
              </th>
              <th scope="col" className="px-3 md:px-4 py-3 font-semibold">
                PLC Simulator Online
              </th>
              <th scope="col" className="w-[40%] md:w-auto px-3 md:px-4 py-3 font-semibold text-primary-800 dark:text-primary-300">
                Rungs Studio
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([feature, before, after]) => (
              <tr key={feature} className="border-t border-gray-200 dark:border-gray-700">
                <th scope="row" className="w-[28%] md:w-auto px-3 md:px-4 py-3 font-medium text-gray-900 dark:text-white md:whitespace-nowrap">
                  {feature}
                </th>
                <td className="px-3 md:px-4 py-3">{before}</td>
                <td className="px-3 md:px-4 py-3">{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-10">
        <a href={studioLink('landing_compare')} target="_blank" rel="noopener noreferrer" className={primaryButton}>
          Open Rungs Studio ↗
        </a>
      </div>
    </section>
  );
}
