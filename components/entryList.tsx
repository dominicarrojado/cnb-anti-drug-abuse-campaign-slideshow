import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { getRefValue, useStateRef } from '../lib/hooks';
import EntryItem from './entryItem';
import { Entry } from '../lib/types';
import { SLIDESHOW_INTERVAL } from '../lib/constants';

type Props = {
  entries: Array<Entry>;
};

export default function EntryList({ entries }: Props) {
  const [maxOffsetY, setMaxOffetY] = useState(0);
  const [offsetY, setOffsetY, offsetYRef] = useStateRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const windowOnResize = () => {
      window.requestAnimationFrame(() => {
        const containerEl = getRefValue(containerRef);

        if (containerEl) {
          setMaxOffetY(containerEl.scrollHeight - containerEl.offsetHeight);
        }
      });
    };

    windowOnResize();

    window.addEventListener('resize', windowOnResize);

    return () => window.removeEventListener('resize', windowOnResize);
  }, []);

  useEffect(() => {
    let interval = NaN;

    interval = window.setInterval(() => {
      if (maxOffsetY !== 0) {
        let newOffsetY = getRefValue(offsetYRef) + 1;

        if (maxOffsetY <= newOffsetY) {
          newOffsetY = 0;
        }

        setOffsetY(newOffsetY);
      } else {
        const containerEl = getRefValue(containerRef);

        if (containerEl) {
          setMaxOffetY(containerEl.scrollHeight - containerEl.offsetHeight);
        }
      }
    }, SLIDESHOW_INTERVAL);

    return () => window.clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxOffsetY]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-0 py-[10px] px-[10px] overflow-hidden"
    >
      <ul
        className={cn('flex flex-wrap', 'transition-transform')}
        style={{ transform: `translateY(-${offsetY}px)` }}
      >
        {entries.map((entry, idx) => (
          <EntryItem key={idx} entry={entry} />
        ))}
      </ul>
    </div>
  );
}
