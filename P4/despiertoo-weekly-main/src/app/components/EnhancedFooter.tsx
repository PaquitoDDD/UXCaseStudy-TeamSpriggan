import { useState } from 'react';

interface FooterLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  fontSize?: string;
}

function FooterLink({ children, onClick, fontSize = '12px' }: FooterLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 cursor-pointer transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
      }}
    >
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[10px] min-w-[10px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px overflow-clip relative w-full">
          <div className="content-stretch flex flex-col items-center max-w-[101px] min-w-[21.600000381469727px] overflow-clip relative shrink-0">
            <div
              className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap transition-colors duration-200"
              style={{
                fontSize,
                color: isHovered ? '#589bea' : '#0b4878',
                textDecoration: isHovered ? 'underline' : 'none',
              }}
            >
              <p className="leading-[normal]">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WideFooterLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
}

function WideFooterLink({ children, onClick, width = '181px' }: WideFooterLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="content-stretch flex flex-col h-[17px] items-start justify-center relative shrink-0 cursor-pointer transition-all duration-200"
      style={{
        width,
        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[10px] min-w-[10px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px overflow-clip relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[181px] min-w-[21.600000381469727px] overflow-clip relative">
            <div
              className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] w-full transition-colors duration-200"
              style={{
                color: isHovered ? '#589bea' : '#0b4878',
                textDecoration: isHovered ? 'underline' : 'none',
              }}
            >
              <p className="leading-[normal]">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function EnhancedFooter() {
  return (
    <div className="relative size-full">
      {/* Despiertoo Section */}
      <div className="absolute left-[495px] top-[54px] flex flex-col gap-2">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[20px]">
          <p className="leading-[30px]">despiertoo</p>
        </div>
        <FooterLink onClick={() => console.log('Conócenos')}>Conócenos</FooterLink>
      </div>

      {/* Links Column 1 - Removed Conócenos from here since it's now under despiertoo */}

      <div className="absolute left-[495px] top-[110px]">
        <FooterLink onClick={() => console.log('Ubicaciones')}>Ubicaciones</FooterLink>
      </div>

      <div className="absolute left-[495px] top-[135px]">
        <FooterLink onClick={() => console.log('Mi Cuenta')}>Mi Cuenta</FooterLink>
      </div>

      <div className="absolute left-[495px] top-[160px]">
        <FooterLink onClick={() => console.log('Trabaja con Nosotros')}>Trabaja con Nosotros</FooterLink>
      </div>

      {/* Condiciones Section */}
      <div className="absolute left-[693px] top-[54px] flex flex-col gap-2">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[20px]">
          <p className="leading-[30px]">condiciones</p>
        </div>
        <WideFooterLink onClick={() => console.log('Política de Privacidad')}>Política de Privacidad</WideFooterLink>
      </div>

      {/* Links Column 2 */}
      <div className="absolute left-[693px] top-[110px]">
        <WideFooterLink width="167px" onClick={() => console.log('Aviso Legal')}>Aviso Legal</WideFooterLink>
      </div>

      <div className="absolute left-[693px] top-[135px]">
        <WideFooterLink width="204px" onClick={() => console.log('Política de Cookies')}>Política de Cookies</WideFooterLink>
      </div>

      <div className="absolute left-[693px] top-[160px]">
        <WideFooterLink width="204px" onClick={() => console.log('Condiciones de Envío')}>Condiciones de Envío</WideFooterLink>
      </div>

      {/* Contacta Section */}
      <div className="absolute left-[897px] top-[54px] flex flex-col gap-2">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[19.8px]">
          <p className="leading-[30px]">contacta</p>
        </div>
        <div
          className="cursor-pointer transition-all duration-200 hover:translate-x-1"
          onClick={() => console.log('Email clicked')}
        >
          <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px] whitespace-nowrap hover:text-[#589bea] hover:underline transition-colors duration-200">
            <p className="leading-[normal]">cafe@despiertoo.com</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="absolute left-[897px] top-[110px] flex flex-col">
        <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">(+34) 684 334 654</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-roman:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">Gran Vía</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">Lun-Vier: 8:30-20:00</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">​Sáb-Dom: 9:00-20:00</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-roman:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px] mt-2">
          <p className="leading-[20.4px]">Jáudenes</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">Lun-Vier: 9:00-20:00</p>
        </div>
        <div className="flex flex-col font-['helvetica-w01-light:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0b4878] text-[12px]">
          <p className="leading-[20.4px]">​Sáb-Dom: 10:00-20:00</p>
        </div>
      </div>

    </div>
  );
}
