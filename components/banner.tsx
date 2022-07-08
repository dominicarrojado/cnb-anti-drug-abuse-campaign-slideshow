import React from 'react';
import { getAssetUrl } from '../lib/assets';
import { APP_URL } from '../lib/constants';

export default function Banner() {
  return (
    <a href={APP_URL}>
      <img
        src={getAssetUrl('images/banner-cnb-anti-drug-abuse-campaign.png')}
        alt="Secure a #DrugFreeSG | Organised by: National Council Against Drug Abuse, Central Narcotics Bureau | In collaboration with: Singapore Polytechnic | Win up to $100 worth of vouchers in a bi-monthly draw"
        width="677"
        height="599"
        className="w-full h-full aspect-[677/599] border-[3px] border-white"
      />
    </a>
  );
}
