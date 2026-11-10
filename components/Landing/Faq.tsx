import React from 'react';
import { CLOSING_DAY_TEXT, sectionHeading } from './links';

const questions: [string, string][] = [
  [
    'Is PLC Simulator Online closing?',
    `Yes, on ${CLOSING_DAY_TEXT}. Until then it works as usual, so there is time to bring your projects across.`,
  ],
  [
    'Is Rungs Studio free?',
    'Yes. The editor, the simulator and Relay, its AI assistant, are free. So is the Boolean Logic course. The other courses need a Plus plan.',
  ],
  ['Do I need an account?', 'No. You can build, run, save to a file and share a link without signing up.'],
  [
    'What happens to my saved projects and shared links?',
    `They open in PLC Simulator Online as before until ${CLOSING_DAY_TEXT}. To move one, open it there and press “Open this project in Rungs Studio”.`,
  ],
  [
    'Will my project look the same?',
    'The rungs are the same. Some names change: a timer’s Q becomes DN, and Set and Reset become Latch and Unlatch. If something cannot be carried over exactly, you are told before the project opens.',
  ],
  ['Does Rungs Studio work on a phone?', 'Yes. It runs in a phone’s browser as well as on a computer.'],
  ['Does Rungs Studio work offline?', `No. PLC Simulator Online does, until ${CLOSING_DAY_TEXT}.`],
];

export default function Faq() {
  return (
    <section className="my-20 px-4 lg:px-0">
      <h2 className={sectionHeading}>Questions</h2>
      <div className="mt-8 mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-gray-700 border-y border-gray-200 dark:border-gray-700">
        {questions.map(([question, answer]) => (
          <details key={question} className="group py-4">
            <summary className="flex justify-between items-center gap-4 cursor-pointer list-none text-lg font-medium text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
              {question}
              <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
