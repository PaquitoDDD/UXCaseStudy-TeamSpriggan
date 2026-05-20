import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';
import imgProducerSeriesCarlosArango from '../../imports/DivSiteContainer-3/82912fe138ce8908dd42eefbe50a9bd3bf2c16b6.png';

export default function EventDetailsPage() {
  const navigate = useNavigate();
  const [isTicketsHovered, setIsTicketsHovered] = useState(false);
  const [isOtherEventsHovered, setIsOtherEventsHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[121px] w-full">
        <EnhancedHeader />
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="flex gap-[80px]">
          {/* Left Column - Event Image */}
          <div className="flex-shrink-0">
            <div className="h-[658px] w-[658px] relative">
              <div className="bg-[#0d5eba] absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-[658px] relative size-[658px]">
                  <img
                    alt="Producer Series: Carlos Arango"
                    className="absolute inset-0 max-w-none object-cover size-full"
                    src={imgProducerSeriesCarlosArango}
                  />
                  <div aria-hidden="true" className="absolute border-4 border-[#905e45] border-solid inset-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="flex-1 flex flex-col gap-[32px]">
            {/* Event Title */}
            <h1 className="font-['helvetica-w01-roman:Regular',sans-serif] text-[26px] leading-[31.2px] text-black">
              Producer Series: Carlos Arango
            </h1>

            {/* Date and Location */}
            <div className="flex items-center gap-[12px]">
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                vie, 20 feb 2026, 19:00 – 21:00
              </p>
              <div className="h-[12.8px] w-[0.8px] bg-black" />
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                despiertoo Gran Vía
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                Gran Vía, 42, Madrid, 28013
              </p>
            </div>

            {/* Event Description */}
            <div className="flex flex-col gap-[16px]">
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black italic">
                Recibimos la visita de un invitado de lujo: Carlos Arango, productor de café del Valle del Cauca, Colombia.
              </p>
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                Únete a nosotros para una velada única donde Carlos compartirá su experiencia cultivando café de especialidad en las montañas colombianas. Durante este evento exclusivo, conocerás de primera mano el proceso desde la semilla hasta la taza, mientras degustas una selección de sus mejores lotes.
              </p>
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                La masterclass incluye:
              </p>
              <ul className="list-disc pl-[24px] flex flex-col gap-[8px]">
                <li className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Historia y tradición cafetalera del Valle del Cauca
                </li>
                <li className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Métodos de cultivo y procesamiento sostenible
                </li>
                <li className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Degustación guiada de cafés de especialidad
                </li>
                <li className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Sesión de preguntas y respuestas
                </li>
              </ul>
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                Entrada gratuita. Plazas limitadas, asegura tu lugar.
              </p>
            </div>

            {/* Tickets Button */}
            <div className="flex flex-col gap-[16px] pt-[16px]">
              <button
                className="bg-[#d4d4d4] h-[64px] w-full flex items-center justify-center transition-all duration-300 cursor-not-allowed"
                onMouseEnter={() => setIsTicketsHovered(true)}
                onMouseLeave={() => setIsTicketsHovered(false)}
                disabled
              >
                <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Las entradas no están a la venta
                </p>
              </button>

              {/* View Other Events Button */}
              <button
                className="bg-white border border-black h-[42px] w-full flex items-center justify-center transition-all duration-300"
                style={{
                  transform: isOtherEventsHovered ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isOtherEventsHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                }}
                onMouseEnter={() => setIsOtherEventsHovered(true)}
                onMouseLeave={() => setIsOtherEventsHovered(false)}
                onClick={() => navigate('/eventos')}
              >
                <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] leading-[22.4px] text-black">
                  Ver otros eventos
                </p>
              </button>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-[16px] pt-[16px]">
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[14px] leading-[19.6px] text-black">
                Compartir:
              </p>
              <div className="flex gap-[12px]">
                {/* Facebook */}
                <button
                  className="w-[40px] h-[40px] bg-[#3b5998] rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: isFacebookHovered ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isFacebookHovered ? '0 4px 12px rgba(59, 89, 152, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setIsFacebookHovered(true)}
                  onMouseLeave={() => setIsFacebookHovered(false)}
                  onClick={() => console.log('Share on Facebook')}
                >
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                    <path d="M6.39703 17.9973V9.80102H9.16202L9.57302 6.59204H6.39703V4.54755C6.39703 3.62205 6.65503 2.98805 7.98403 2.98805H9.66803V0.127043C8.84867 0.0393713 8.02531 -0.00374021 7.20153 0.000537813C4.75703 0.000537813 3.07903 1.49254 3.07903 4.23105V6.58654H0.332031V9.79552H3.08453V17.9973H6.39703Z" fill="white"/>
                  </svg>
                </button>

                {/* Twitter */}
                <button
                  className="w-[40px] h-[40px] bg-[#1da1f2] rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: isTwitterHovered ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isTwitterHovered ? '0 4px 12px rgba(29, 161, 242, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setIsTwitterHovered(true)}
                  onMouseLeave={() => setIsTwitterHovered(false)}
                  onClick={() => console.log('Share on Twitter')}
                >
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                    <path d="M17.3337 1.78788C16.6948 2.06867 16.0142 2.25891 15.3066 2.35055C16.0348 1.91704 16.5877 1.22773 16.8511 0.402051C16.1584 0.806762 15.3963 1.09479 14.5967 1.24679C13.9489 0.560223 13.0278 0.133301 12.0088 0.133301C10.0611 0.133301 8.4815 1.71288 8.4815 3.66055C8.4815 3.93738 8.51147 4.20812 8.57047 4.46886C5.62739 4.32578 2.9996 2.92142 1.22281 0.800878C0.921813 1.30904 0.749219 1.91698 0.749219 2.56461C0.749219 3.79376 1.37595 4.87644 2.32969 5.50978C1.74879 5.49262 1.19584 5.33467 0.709693 5.06882C0.709693 5.08208 0.709693 5.09535 0.709693 5.11052C0.709693 6.82248 1.92545 8.24911 3.53876 8.56997C3.24482 8.64761 2.9355 8.68937 2.61506 8.68937C2.38857 8.68937 2.16797 8.66726 1.95148 8.62436C2.40078 10.0249 3.70104 11.0461 5.25214 11.0749C4.04545 12.0209 2.52088 12.5805 0.864063 12.5805C0.577969 12.5805 0.295031 12.5653 0.015625 12.5309C1.58398 13.5334 3.43953 14.1333 5.4415 14.1333C12.0002 14.1333 15.5995 8.75156 15.5995 4.07016C15.5995 3.91595 15.5963 3.76195 15.5888 3.60795C16.2919 3.11248 16.8534 2.49348 17.3337 1.78788Z" fill="white"/>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  className="w-[40px] h-[40px] bg-[#0077b5] rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: isLinkedInHovered ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isLinkedInHovered ? '0 4px 12px rgba(0, 119, 181, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setIsLinkedInHovered(true)}
                  onMouseLeave={() => setIsLinkedInHovered(false)}
                  onClick={() => console.log('Share on LinkedIn')}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.58667 15.3333H0.280005V5.09992H3.58667V15.3333ZM1.93334 3.70659C0.866672 3.70659 0 2.81992 0 1.75325C-3.17377e-09 1.2328 0.206514 0.733616 0.574338 0.365791C0.942162 -0.00203321 1.44135 -0.208496 1.96178 -0.208496C2.48222 -0.208496 2.98141 -0.00203321 3.34923 0.365791C3.71705 0.733616 3.92357 1.2328 3.92357 1.75325C3.92357 2.81992 3.05667 3.70659 1.93334 3.70659ZM15.9967 15.3333H12.6967V10.3599C12.6967 9.09325 12.67 7.45992 10.9167 7.45992C9.13667 7.45992 8.86 8.84659 8.86 10.2666V15.3333H5.55667V5.09992H8.72334V6.58659H8.77001C9.21001 5.74659 10.2967 4.85992 11.89 4.85992C15.2367 4.85992 15.9967 7.07325 15.9967 9.96659V15.3333Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#fafafa] py-16 px-8 mt-20">
        <div className="max-w-[1400px] mx-auto relative h-[375px]">
          <EnhancedFooter />
        </div>
      </footer>
    </div>
  );
}
