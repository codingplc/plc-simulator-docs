import React, { useEffect, useState } from 'react';
import { CLOSING_DAY, CLOSING_DAY_TEXT } from './links';

/** Whole days from the reader's today to the closing day, in their own calendar. */
function daysLeft(): number {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const closing = Date.UTC(CLOSING_DAY.year, CLOSING_DAY.month - 1, CLOSING_DAY.day);
  return Math.round((closing - today) / 86_400_000);
}

/**
 * Days left until PLC Simulator Online closes, as a small label above the headline.
 *
 * The page is exported as static HTML, so the count is added after it loads: counted at build
 * time it would be stale by the next day.
 */
export default function Countdown() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => setDays(daysLeft()), []);

  const count = days === null ? null : days > 1 ? `${days} days left` : days === 1 ? '1 day left' : 'closes today';
  return (
    <p className="mx-auto mb-8 w-fit rounded-xl sm:rounded-full text-center border border-gray-200 dark:border-gray-700 px-5 py-1.5 text-base text-gray-600 dark:text-gray-400">
      PLC Simulator Online closes on <span className="whitespace-nowrap">{CLOSING_DAY_TEXT}</span>
      {count && (
        <>
          {' · '}
          <span className="whitespace-nowrap font-semibold text-gray-900 dark:text-white tabular-nums">{count}</span>
        </>
      )}
    </p>
  );
}
