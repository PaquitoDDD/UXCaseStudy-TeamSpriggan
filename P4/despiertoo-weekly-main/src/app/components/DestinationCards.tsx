import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgImage6 from '../../imports/Frame7/7a86beed08baeba138488f8e547a7e5d3b58f7c7.png';
import imgImage7 from '../../imports/Frame7/d5f8d48b099b3eb1b6419ce4a666df93c362d741.png';
import imgImage9 from '../../imports/Frame7/f207f2d197fd59356528a7496dde28d4000439aa.png';
import imgImage10 from '../../imports/Frame7/abdac4a99ea703f318988865d770394324c740e9.png';
import imgImage8 from '../../imports/Frame7/5e7c1acd8b5f3a22fd421d76a2004f46e50fd330.png';

interface DestinationCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

function DestinationCard({ image, title, onClick }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[546px] items-center px-[200px] py-[8px] relative shrink-0 w-[534px]">
      <div className="h-[439px] relative rounded-[40px] shrink-0 w-[502px]">
        <img
          alt={title}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full"
          src={image}
        />
      </div>
      <div className="content-stretch flex gap-[40px] items-start px-[10px] py-[10px] relative shrink-0">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-black text-center whitespace-nowrap">
          <p className="leading-[normal]">{title}</p>
        </div>
        <button
          className="grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[__fit-content(100%)_minmax(0,1fr)] h-[87px] relative shrink-0 w-[167px] cursor-pointer transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          <div
            className="bg-[#af6f22] col-1 content-stretch flex gap-[8px] h-[87px] items-center justify-center px-[16px] py-[8px] relative rounded-[45px] row-1 shrink-0 w-[167px] transition-all duration-300"
            style={{
              boxShadow: isHovered ? '0 8px 20px rgba(175, 111, 34, 0.4)' : 'none',
            }}
          />
          <div className="absolute h-[66px] left-[48px] top-[11px] w-[71px] pointer-events-none">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default function DestinationCards() {
  const navigate = useNavigate();
  const [isViewAllHovered, setIsViewAllHovered] = useState(false);

  const destinations = [
    { image: imgImage6, title: 'Japón', route: '/japon' },
    { image: imgImage7, title: 'Italia', route: '/italia' },
    { image: imgImage9, title: 'México', route: '/mexico' },
    { image: imgImage10, title: 'Alemania', route: '/alemania' },
  ];

  return (
    <div className="bg-[#f3d4b0] relative rounded-[15px] size-full">
      <div className="content-start flex flex-wrap gap-[72px_30px] items-start justify-center overflow-clip py-[24px] relative rounded-[inherit] size-full">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            image={dest.image}
            title={dest.title}
            onClick={() => navigate(dest.route)}
          />
        ))}
        <button
          className="content-stretch flex h-[169px] items-start relative shrink-0 w-[750px] cursor-pointer transition-transform duration-300"
          style={{
            transform: isViewAllHovered ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsViewAllHovered(true)}
          onMouseLeave={() => setIsViewAllHovered(false)}
          onClick={() => console.log('View all articles')}
        >
          <div
            className="bg-[#589bea] content-stretch flex gap-[8px] h-[169px] items-center justify-center px-[16px] py-[8px] relative rounded-[45px] shrink-0 w-[740px] transition-all duration-300"
            style={{
              boxShadow: isViewAllHovered ? '0 12px 32px rgba(88, 155, 234, 0.4)' : 'none',
            }}
          >
            <p className="font-['Montserrat:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[48px] text-center text-white whitespace-nowrap">
              Ver todos los artículos
            </p>
          </div>
        </button>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[#5e3708] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}
