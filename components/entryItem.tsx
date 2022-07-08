import cn from 'classnames';
import React from 'react';
import { Entry } from '../lib/types';
import { ENTRY_IMAGE_SIZE } from '../lib/constants';

type Props = {
  entry: Entry;
};

export default function EntryItem({ entry }: Props) {
  return (
    <li
      className={cn(
        'relative w-[33.3%] aspect-ratio p-[10px] select-none',
        '[&:nth-child(3n+2)]:transform [&:nth-child(3n+2)]:-translate-y-[150px]'
      )}
    >
      <img
        src={entry.imageUrl}
        alt={`${entry.name} pledge`}
        width={ENTRY_IMAGE_SIZE}
        height={ENTRY_IMAGE_SIZE}
        className={cn(
          'w-full h-full aspect-square border-[5px] border-white bg-white'
        )}
        draggable={false}
      />
    </li>
  );
}
