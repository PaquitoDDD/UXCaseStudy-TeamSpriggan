import imgImage9 from "./47b0e3708aff1487cfe9097633d89ec09d9e68a1.png";
import imgImage10 from "./b4e27b8a7d785ca8f7451181f28300235dd88bd0.png";
import imgImage11 from "./63ce90bfcdf199fd8a576b1b7d6610504c414e18.png";

function Frame2() {
  return (
    <div className="col-1 gap-x-[10px] gap-y-[40px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid justify-self-center leading-[normal] not-italic overflow-clip relative row-1 self-center shrink-0 text-black">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] h-[102px] justify-self-start relative row-1 self-start shrink-0 text-[96px] text-center w-[601px]">El origen</p>
      <p className="col-1 font-['Inter_18pt:Light',sans-serif] h-[311px] justify-self-center relative row-2 self-center shrink-0 text-[28px] w-[579px]">El café llegó a Brasil en 1727, introducido desde la Guayana Francesa por el teniente coronel Francisco de Melo Palheta, quien supuestamente contrabandeó las primeras semillas. Plantado inicialmente en Pará, se extendió rápidamente hacia el sureste, convirtiéndose en el motor económico del país y principal exportador mundial hacia 1830.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] overflow-clip relative shrink-0 w-full">
      <div className="col-2 h-[450px] relative row-1 shrink-0 w-[675px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-2 gap-x-[10px] gap-y-[40px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid justify-self-center leading-[normal] not-italic overflow-clip relative row-1 self-center shrink-0 text-black">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] h-[102px] justify-self-start relative row-1 self-start shrink-0 text-[96px] text-center w-[601px]">Los tipos</p>
      <p className="col-1 font-['Inter_18pt:Light',sans-serif] h-[311px] justify-self-center relative row-2 self-center shrink-0 text-[28px] w-[579px]">Brasil es el mayor productor mundial de café, destacando principalmente por sus variedades de Arábica (80% de la producción), reconocidos por su sabor dulce, cuerpo medio, baja acidez y notas achocolatadas o de frutos secos. Las variedades más cultivadas incluyen Bourbon, Mundo Novo, Catuaí, Acaia e Icatu.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] overflow-clip relative shrink-0 w-full">
      <Frame4 />
      <div className="col-1 h-[450px] relative row-1 shrink-0 w-[675px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 gap-x-[10px] gap-y-[40px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] inline-grid justify-self-center leading-[normal] not-italic overflow-clip relative row-1 self-center shrink-0 text-black">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] h-[102px] justify-self-start relative row-1 self-start shrink-0 text-[96px] text-center w-[601px]">Los sabores</p>
      <p className="col-1 font-['Inter_18pt:Light',sans-serif] h-[311px] justify-self-center relative row-2 self-center shrink-0 text-[28px] w-[579px]">El café de Brasil se caracteriza por un cuerpo denso, baja acidez y un perfil de sabor suave y equilibrado. Sus notas principales evocan dulzor: destacan los matices de chocolate con leche, caramelo, azúcar moreno y frutos secos (como nueces o almendras). Los sabores varían ligeramente según la variedad del grano arábica (que representa el 80% de su producción).</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] overflow-clip relative shrink-0 w-full">
      <div className="col-2 h-[450px] relative row-1 shrink-0 w-[675px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <Frame6 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start px-[46px] py-[39px] relative size-full">
      <Frame1 />
      <Frame3 />
      <Frame5 />
      <p className="font-['Montserrat:Bold',sans-serif] h-[160px] leading-[normal] not-italic relative shrink-0 text-[#1e7de1] text-[96px] text-center w-[1292px]">Nuestra selección:</p>
    </div>
  );
}