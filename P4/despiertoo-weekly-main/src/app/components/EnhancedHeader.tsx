import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import svgPaths from '../../imports/HeaderSiteHeader/svg-t393awcsly';

function NavItem({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer transition-all duration-200"
      role="link"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-left whitespace-nowrap">
        <p
          className="cursor-pointer leading-[21px] transition-colors duration-200"
          style={{
            color: isHovered ? '#589bea' : '#0b4878',
            fontWeight: isHovered ? '600' : '400',
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function TiendaNavItem({ onClick }: { onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer transition-all duration-200"
      role="link"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-left whitespace-nowrap">
        <p
          className="cursor-pointer leading-[21px] transition-colors duration-200"
          style={{
            color: isHovered ? '#589bea' : '#0b4878',
            fontWeight: isHovered ? '600' : '400',
          }}
        >
          TIENDA
        </p>
      </div>
    </div>
  );
}

function LoginButton({ onClick }: { onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="content-stretch flex h-[40px] items-center justify-end relative shrink-0 w-[142.7px] cursor-pointer"
      onClick={onClick}
    >
      <div
        className="content-stretch flex isolate items-center pl-[7px] py-[6px] relative shrink-0 transition-all duration-300 rounded-full"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="content-stretch flex flex-col h-[26px] items-start px-[7px] relative shrink-0 z-[2]">
          <div className="content-stretch flex flex-col h-[26px] items-start overflow-clip relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[26px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                  <g id="Group">
                    <path d={svgPaths.p15c4ef70} fill={isHovered ? '#589bea' : '#0B4878'} id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center px-[7px] relative shrink-0 z-[1]">
          <div className="flex flex-col font-['helvetica-w01-roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p
              className="leading-[19.6px] transition-colors duration-300"
              style={{
                color: isHovered ? '#589bea' : 'white',
              }}
            >
              Iniciar sesión
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartButton({ onClick }: { onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const { totalItems } = useCart();

  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[34px] cursor-pointer transition-transform duration-300"
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full pointer-events-none">
        <div className="h-[40.638px] relative shrink-0 w-full">
          <div className="absolute inset-[33.31%_3.12%_0.08%_3.79%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.6489 27.0702">
              <path d={svgPaths.p2697f630} fill={isHovered ? '#589bea' : '#0D5EBA'} id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_25.29%_66.69%_25.95%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.578 13.5351">
              <path d={svgPaths.p29218600} fill={isHovered ? '#589bea' : '#0D5EBA'} id="Vector" />
            </svg>
          </div>
          <p className="absolute font-['helvetica-w01-roman:Regular',sans-serif] inset-[42.03%_36.56%_11.22%_36.97%] leading-[normal] not-italic text-[16.113px] text-center text-white whitespace-nowrap">
            {totalItems}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedHeader() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-0 top-0 w-[1476px]">
        <div className="bg-white flex-[1_0_0] min-h-px relative w-full" />
      </div>
      <div className="content-stretch flex flex-col h-[121px] items-start relative shrink-0 w-[1461px]">
        <div className="absolute bottom-[0.36px] content-stretch flex flex-col items-start justify-center left-[250px] top-0 w-[980px]">
          <div className="bg-white flex-[1_0_0] min-h-px relative w-full" />
        </div>
        <div className="content-stretch flex items-start pl-[12px] pr-[131px] relative shrink-0 w-[1482px]">
          {/* Logo */}
          <div className="content-stretch flex flex-col items-start mr-[-219px] pb-[29px] pl-[250px] pt-[22px] relative shrink-0 w-[398px]">
            <div className="content-stretch flex flex-col h-[70px] items-start relative shrink-0 w-[177px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b4878] text-[32px] w-full">
                  <p className="leading-[normal]">despiertoo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className="content-stretch flex flex-col h-[92px] items-start mr-[-219px] pb-[29px] pl-[293px] pt-[23px] relative shrink-0 w-[376px]">
            <LoginButton onClick={() => console.log('Login clicked')} />
          </div>

          {/* Cart */}
          <div className="content-stretch flex flex-col items-start mr-[-219px] pb-[27px] pl-[250px] pt-[25px] relative shrink-0 w-[284px] z-10">
            <CartButton onClick={() => setIsCartOpen(true)} />
          </div>

          {/* Language Selector */}
          <div className="content-stretch flex flex-col h-[92px] items-start mr-[-219px] pb-[22px] pl-[255px] pt-[23px] relative shrink-0 w-[338px]">
            <div className="content-stretch flex flex-col h-[47px] items-start justify-center relative shrink-0 w-[83.2px]">
              <div className="bg-white flex-[1_0_0] min-h-px relative w-full">
                <div className="content-stretch flex gap-[2.71px] items-center overflow-clip p-px relative rounded-[inherit] size-full">
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] relative size-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
                        <div className="flex flex-col font-['helvetica-w01-roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
                          <p className="leading-[19.6px]">ES</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[20px] pr-[14px] relative size-full">
                      <div className="h-[6.325px] overflow-clip relative shrink-0 w-[12px]">
                        <div className="absolute inset-[0_0.05%_0_0.23%]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9663 6.32501">
                            <path d={svgPaths.p1e849f00} fill="black" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#959595] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="content-stretch flex flex-col h-[92px] items-start pb-[29px] pl-[280px] pt-[42px] relative shrink-0 w-[877px]">
            <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0 w-[514px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full">
                <div className="flex items-center h-[21px] gap-[10px]">
                  <TiendaNavItem onClick={() => navigate('/tienda')} />
                  <div className="border-[#0b4878] border-l-[0.8px] border-solid h-[21px]" />
                  <NavItem onClick={() => console.log('SOBRE NOSOTROS')}>SOBRE NOSOTROS</NavItem>
                  <div className="border-[#0b4878] border-l-[0.8px] border-solid h-[21px]" />
                  <NavItem onClick={() => console.log('CONTACTO')}>CONTACTO</NavItem>
                  <div className="border-[#0b4878] border-l-[0.8px] border-solid h-[21px]" />
                  <NavItem onClick={() => navigate('/eventos')}>EVENTOS</NavItem>
                  <div className="border-[#0b4878] border-l-[0.8px] border-solid h-[21px]" />
                  <NavItem onClick={() => navigate('/')}>WEEKLY</NavItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
