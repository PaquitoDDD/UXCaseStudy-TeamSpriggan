import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';
import imgDesktop1 from '../../imports/DivSiteContainer-1/5fff8d4fd093800bbeb8cd91a6abe4b3df0c3c24.png';
import imgImage9 from '../../imports/Frame14/47b0e3708aff1487cfe9097633d89ec09d9e68a1.png';
import imgImage10 from '../../imports/Frame14/b4e27b8a7d785ca8f7451181f28300235dd88bd0.png';
import imgImage11 from '../../imports/Frame14/63ce90bfcdf199fd8a576b1b7d6610504c414e18.png';
import imgProduct1 from '../../imports/Div-1/1136ac6f57058143b7a8ea855a8166b0fdde1f64.png';
import imgProduct2 from '../../imports/Div-1/b4ceb788db5e1a25bc4607d9339568511778a52a.png';
import imgProduct3 from '../../imports/Div-1/25d3f2b4799bf8ec5a47f9de2d76b024f866f320.png';
import imgArrow from '../../imports/Div-1/5e7c1acd8b5f3a22fd421d76a2004f46e50fd330.png';

interface ProductCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

function ProductCard({ image, title, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] h-[591px] relative shrink-0 w-[345px]">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] h-[59px] justify-self-center leading-[normal] not-italic relative row-2 self-start shrink-0 text-[36px] text-black text-center w-[338px]">
        {title}
      </p>
      <div className="col-1 h-[378px] justify-self-center pointer-events-none relative rounded-[5px] row-1 self-start shrink-0 w-[244px]">
        <img
          alt={title}
          className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full"
          src={image}
        />
        <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 rounded-[5px]" />
      </div>
      <div
        className="col-1 h-[87px] relative row-3 shrink-0 w-[329px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div
          className="bg-[#589bea] h-[87px] flex items-center rounded-[45px] w-[329px] transition-all duration-300 relative"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            boxShadow: isHovered ? '0 8px 24px rgba(88, 155, 234, 0.4)' : 'none',
          }}
        >
          <div className="absolute h-[66px] right-[33px] top-[11px] w-[71px] pointer-events-none">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgArrow} />
          </div>
          <p className="font-['Montserrat:Bold',sans-serif] leading-[normal] not-italic text-[36px] text-white pl-[50px]">
            Detalles
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MexicoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[121px] w-full">
        <EnhancedHeader />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: '900px',
        }}
      >
        <div className="absolute inset-0">
          <img
            alt="México Coffee Background"
            className="absolute h-[144.53%] left-[-0.93%] max-w-none top-[-23.99%] w-full"
            src={imgDesktop1}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-8">
          <h1
            className="font-['Montserrat:Bold',sans-serif] leading-[normal] not-italic text-[150px] text-center whitespace-nowrap"
            style={{
              color: '#4fe09f',
              WebkitTextStroke: '5px #5A360A',
              paintOrder: 'stroke fill'
            }}
          >
            Descubre México
          </h1>
          <div className="h-[566px] overflow-clip relative w-[1132px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_18pt:Light',sans-serif] h-[538px] justify-center leading-[0] left-[565.5px] not-italic text-[72px] text-center text-white top-[268.6px] w-[915px]">
              <p className="leading-[normal]">
                Tierra de origen del café orgánico, México ofrece granos cultivados en altura con sabores brillantes y una rica herencia cafetalera
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[120px]">
          {/* El origen */}
          <div className="flex items-center justify-between gap-[60px]">
            <div className="h-[450px] w-[675px] flex-shrink-0">
              <img alt="Coffee Origin" className="w-full h-full object-cover" src={imgImage9} />
            </div>
            <div className="flex flex-col gap-[40px] max-w-[601px] justify-center bg-[#f5e6d3] p-12 rounded-lg">
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[96px] leading-[normal] text-[#824c0b] text-center whitespace-nowrap">
                El origen
              </h2>
              <p className="font-['Inter_18pt:Light',sans-serif] text-[28px] leading-[normal] text-black">
                El café llegó a México a finales del siglo XVIII desde las Antillas. Las regiones montañosas de Chiapas, Veracruz y Oaxaca se convirtieron en zonas ideales para el cultivo, produciendo algunos de los mejores cafés orgánicos del mundo.
              </p>
            </div>
          </div>

          {/* Los tipos */}
          <div className="flex items-center justify-between gap-[60px]">
            <div className="flex flex-col gap-[40px] max-w-[601px] justify-center bg-[#e3f2fd] p-12 rounded-lg">
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[96px] leading-[normal] text-[#589bea] text-center whitespace-nowrap">Los tipos</h2>
              <p className="font-['Inter_18pt:Light',sans-serif] text-[28px] leading-[normal] text-black">
                México produce principalmente Arábica de altura, destacando las variedades Typica, Bourbon y Mundo Novo. Son reconocidos por su certificación orgánica y métodos de cultivo sustentable bajo sombra.
              </p>
            </div>
            <div className="h-[450px] w-[675px] flex-shrink-0">
              <img alt="Coffee Types" className="w-full h-full object-cover" src={imgImage10} />
            </div>
          </div>

          {/* Los sabores */}
          <div className="flex items-center justify-between gap-[60px]">
            <div className="h-[450px] w-[675px] flex-shrink-0">
              <img alt="Coffee Flavors" className="w-full h-full object-cover" src={imgImage11} />
            </div>
            <div className="flex flex-col gap-[40px] max-w-[601px] justify-center bg-[#e8f8f3] p-12 rounded-lg">
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[80px] leading-[normal] text-[#4fe09f] text-center whitespace-nowrap">
                Los sabores
              </h2>
              <p className="font-['Inter_18pt:Light',sans-serif] text-[28px] leading-[normal] text-black">
                El café mexicano ofrece un perfil ligero a medio con acidez brillante. Destacan notas de chocolate con leche, frutos secos, especias dulces y toques cítricos que reflejan su terruño único.
              </p>
            </div>
          </div>

          {/* Selection Title */}
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[96px] leading-[normal] text-[#1e7de1] text-center">
            Nuestra selección:
          </h2>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#f3d4b0] rounded-[15px] relative overflow-hidden">
            <div className="content-stretch flex gap-[148px] items-center justify-center px-[33px] py-12 relative rounded-[inherit]">
              <ProductCard
                image={imgProduct1}
                title="Chiapas Altura"
                onClick={() => console.log('Chiapas Altura details')}
              />
              <ProductCard
                image={imgProduct2}
                title="Oaxaca Pluma"
                onClick={() => console.log('Oaxaca Pluma details')}
              />
              <ProductCard
                image={imgProduct3}
                title="Veracruz Coatepec"
                onClick={() => console.log('Veracruz Coatepec details')}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute border-5 border-[#5e3708] border-solid inset-0 pointer-events-none rounded-[15px]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ececec] py-16 px-8 mt-20">
        <div className="max-w-[1400px] mx-auto relative h-[375px]">
          <EnhancedFooter />
        </div>
      </footer>
    </div>
  );
}
