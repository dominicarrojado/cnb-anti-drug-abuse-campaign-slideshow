import React from 'react';
import cn from 'classnames';

export default function Warning() {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full border-[3px] border-white bg-black bg-opacity-80 p-[30px]',
        'lg:hidden lg:portrait:flex lg:p-[40px]'
      )}
    >
      <p className={cn('text-center text-white text-[20px]', 'sm:text-[24px]')}>
        This experience is designed to be viewed in landscape. <br />
        Please view the site with a minimum screen of 1280 x 720.
      </p>
    </div>
  );
}
