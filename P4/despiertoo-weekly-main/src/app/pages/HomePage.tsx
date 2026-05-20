import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnhancedHeader from '../components/EnhancedHeader';
import DestinationCards from '../components/DestinationCards';
import EnhancedFooter from '../components/EnhancedFooter';
import patronImg from '../../imports/patron.png';
import winli1Img from '../../imports/winli1_1.png';
import image5Img from '../../imports/image_5.png';

function DiscoverButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="bg-[#824c0b] rounded-[45px] px-16 py-4 h-[92px] transition-all duration-300 cursor-pointer"
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 8px 24px rgba(130, 76, 11, 0.3)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <p className="font-['Montserrat'] font-bold text-[36px] leading-[24px] text-white text-center whitespace-nowrap">
        Descubre Brasil
      </p>
    </button>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[121px] w-full">
        <EnhancedHeader />
      </div>

      {/* Hero Section */}
      <section className="bg-white flex flex-col items-center justify-center px-8 py-12">
        <div className="max-w-[1400px] w-full flex items-center justify-center gap-12">
          <div className="w-[496px] h-[346px]">
            <img
              src={winli1Img}
              alt="Weekly Coffee Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-['Montserrat'] text-[80px] leading-[85px] text-[#589bea] text-center mb-0">
              Una nueva semana.
            </p>
            <p className="font-['Montserrat'] text-[80px] leading-[85px] text-[#1e7de1] text-center mb-0">
              Una nueva forma
            </p>
            <p className="font-['Montserrat'] text-[80px] leading-[85px] text-[#1e7de1] text-center mb-0">
              de experienciar
            </p>
            <p className="font-['Montserrat'] text-[80px] leading-[85px] text-center">
              <span className="text-[#81533d]">café</span>
              <span className="text-[#1e7de1]">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Section */}
      <section
        className="relative py-16 px-8"
        style={{
          backgroundImage: `url(${patronImg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          minHeight: '900px'
        }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-16">
          <h2 className="font-['Montserrat'] text-[56px] leading-[60px] text-center" style={{
            WebkitTextStroke: '2px #5A360A',
            paintOrder: 'stroke fill',
            color: '#B2D1F9'
          }}>
            Esta semana: <span style={{ color: '#F5D2AB' }}>Sabores de Brasil</span>
          </h2>

          <div className="flex items-center gap-6">
            <div className="w-[515px]">
              <img
                src={image5Img}
                alt="Cafe Brasil"
                className="w-full h-auto rounded-[40px]"
              />
            </div>
            <div className="max-w-[800px] font-['Montserrat'] text-[64px] leading-[72px] text-white text-center" style={{
              WebkitTextStroke: '2px #5A360A',
              paintOrder: 'stroke fill'
            }}>
              Cada semana, prueba y aprende sobre tipos de café traídos desde todo el mundo
            </div>
          </div>

          <DiscoverButton onClick={() => navigate('/brasil')} />
        </div>
      </section>

      {/* Discover Other Flavors */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-['Montserrat'] text-[96px] leading-[113px] text-black text-center mb-16">
            Descubre otros sabores
          </h2>
          <DestinationCards />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ececec] py-16 px-8">
        <div className="max-w-[1400px] mx-auto relative h-[375px]">
          <EnhancedFooter />
        </div>
      </footer>
    </div>
  );
}
