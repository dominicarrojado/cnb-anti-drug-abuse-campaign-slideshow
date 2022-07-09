import cn from 'classnames';
import React from 'react';
import { Color, Direction, Entry } from '../lib/types';
import { ENTRY_IMAGE_SIZE } from '../lib/constants';

type Props = {
  entry: Entry;
};

export default function EntryItem({ entry }: Props) {
  const overlayStyle = {
    animationDelay: `${entry.animationDelay}s`,
  };

  return (
    <li
      className={cn(
        'w-[33.3%] aspect-square p-[10px] select-none',
        '[&:nth-child(3n+2)]:transform [&:nth-child(3n+2)]:-translate-y-[150px]'
      )}
    >
      <div className="relative inline-flex aspect-square border-[5px] border-white bg-white overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={`${entry.name} pledge`}
          width={ENTRY_IMAGE_SIZE}
          height={ENTRY_IMAGE_SIZE}
          className="w-full h-full aspect-square bg-white"
          draggable={false}
        />
        <div
          className={cn('absolute inset-0', {
            'bg-violet-350': entry.bgColor === Color.VIOLET,
            'bg-red-550': entry.bgColor === Color.RED,
            'bg-cyan-450': entry.bgColor === Color.CYAN,
            'bg-yellow-450': entry.bgColor === Color.YELLOW,
            'animate-slide-up': entry.bgDirection === Direction.UP,
            'animate-slide-right': entry.bgDirection === Direction.RIGHT,
            'animate-slide-down': entry.bgDirection === Direction.DOWN,
            'animate-slide-left': entry.bgDirection === Direction.LEFT,
          })}
          style={overlayStyle}
        />
        <blockquote
          className={cn(
            'absolute inset-0 flex justify-center items-center',
            'animate-appear'
          )}
          style={overlayStyle}
        >
          <p className="p-[15px] text-center text-white text-[1.3vw] leading-[1.5vw] italic">
            {entry.message}
          </p>
          <footer className="sr-only">{entry.name}</footer>
        </blockquote>
      </div>
    </li>
  );
}
