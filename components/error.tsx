import cn from 'classnames';
import React from 'react';

type Props = {
  retryOnClick: () => void;
};

export default function Error({ retryOnClick }: Props) {
  return (
    <p className={cn('p-[40px] text-center text-white text-[24px]')}>
      An unexpected error occurred. Sorry for the inconvenience, please click{' '}
      <a className="underline cursor-pointer" onClick={retryOnClick}>
        here
      </a>{' '}
      to try again.
    </p>
  );
}
