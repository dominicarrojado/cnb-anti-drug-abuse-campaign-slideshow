import React from 'react';
import { getAssetUrl } from '../lib/assets';

export default function Logo() {
  return (
    <h1 className="w-full h-full pb-[10px]">
      <img
        src={getAssetUrl('images/logo-secure-a-drug-free-singapore.png')}
        alt="Secure a #DrugFreeSG"
        width="676"
        height="343"
        className="w-full h-full aspect-[676/343] border-[3px] border-white"
      />
    </h1>
  );
}
