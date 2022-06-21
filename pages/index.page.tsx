import { getAssetUrl } from '../lib/assets';

export default function Home() {
  return (
    <div className="w-full h-full flex gap-[10px] p-[40px]">
      <div className="flex-1 h-full border-[3px] border-white bg-black bg-opacity-80"></div>
      <div className="flex flex-shrink-0 h-full flex-col">
        <div className="h-[36%]">
          <h1 className="w-full h-full pb-[10px]">
            <img
              src={getAssetUrl('images/logo-secure-a-drug-free-singapore.png')}
              alt="Secure a #DrugFreeSG"
              width="676"
              height="343"
              className="w-full h-full aspect-[676/343] border-[3px] border-white"
            />
          </h1>
        </div>

        <div className="h-[64%]">
          <img
            src={getAssetUrl('images/banner-cnb-anti-drug-abuse-campaign.png')}
            alt="Secure a #DrugFreeSG | Organised by: National Council Against Drug Abuse, Central Narcotics Bureau | In collaboration with: Singapore Polytechnic | Win up to $100 worth of vouchers in a bi-monthly draw"
            width="677"
            height="599"
            className="w-full h-full aspect-[677/599] border-[3px] border-white"
          />
        </div>
      </div>
    </div>
  );
}
