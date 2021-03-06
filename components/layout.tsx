import React, { ReactNode } from 'react';
import { getAssetUrl } from '../lib/assets';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className="flex flex-col h-full bg-red-550 bg-top bg-repeat-y bg-cover"
      style={{
        backgroundImage: `url(${getAssetUrl(
          'images/bg-vibrant-colors-striped.png'
        )})`,
      }}
    >
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
