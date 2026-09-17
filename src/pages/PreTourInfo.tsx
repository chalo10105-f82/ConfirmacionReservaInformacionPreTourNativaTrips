const assetPathPrefix = "/assets";
const imgHeroBanner = `${assetPathPrefix}/b373a.png`;
const imgMapImage = `${assetPathPrefix}/930b7.png`;
const imgMountain = `${assetPathPrefix}/4befd.svg`;
const imgCircleHelp = `${assetPathPrefix}/23837.svg`;
const imgThermometerSun = `${assetPathPrefix}/2dbb7.svg`;
const imgCloudRain = `${assetPathPrefix}/141be.svg`;
const imgWind = `${assetPathPrefix}/bdcd7.svg`;
const imgSun = `${assetPathPrefix}/0bea6.svg`;
const imgLine = `${assetPathPrefix}/fb940.svg`;
const imgAlertTriangle = `${assetPathPrefix}/f7e3b.svg`;
const imgMapPinCheck = `${assetPathPrefix}/79b62.svg`;
const imgMapPin = `${assetPathPrefix}/39ecb.svg`;
const imgAlarmClock = `${assetPathPrefix}/780ff.svg`;
const imgUser = `${assetPathPrefix}/51d94.svg`;
const imgBus = `${assetPathPrefix}/0dbc0.svg`;
const imgCheckCircle = `${assetPathPrefix}/a03af.svg`;
const imgXCircle = `${assetPathPrefix}/86041.svg`;
const imgHelpCircle = `${assetPathPrefix}/4b2b8.svg`;
const imgCamera = `${assetPathPrefix}/dcd91.svg`;
const imgFacebook = `${assetPathPrefix}/62d18.svg`;
const imgMessageCircle = `${assetPathPrefix}/b67ef.svg`;
const imgLine1 = `${assetPathPrefix}/40157.svg`;

const checklistItems = [
  'Documento de identidad original',
  'Ropa térmica en capas (no algodón)',
  'Chaqueta impermeable',
  'Botas de trekking con buen agarre',
  'Protector solar FPS 50+',
  'Gorra o sombrero para el frío',
  'Mínimo 2 litros de agua',
  'Snacks energéticos (frutos secos, barras)',
  'Mochila pequeña (máx. 30L)',
  'Cámara fotográfica (opcional)',
];

const noCarryItems = ['Mascotas', 'Parlantes / Bocinas', 'Bebidas alcohólicas', 'Plástico de un solo uso'];

const tips = [
  { title: 'Cena e hidratación previa', desc: 'Cena bien la noche anterior (carbohidratos complejos) y duerme al menos 7 horas.' },
  { title: 'Atención a la altitud', desc: 'Chingaza supera los 3,500 msnm. Si sientes mareo o dolor de cabeza, avisa a tu guía de inmediato.' },
  { title: 'No dejar rastro', desc: 'Todo residuo que generes regresa contigo. Respetemos el ecosistema sagrado del agua.' },
  { title: 'Respira y contempla', desc: 'Vas a recorrer un territorio místico de frailejones y agua pura. Conéctate con el entorno.' },
];

export default function PreTourInfo() {
  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen" data-node-id="1:123">
      {/* Header */}
      <div className="bg-[#13201a] flex items-center justify-between px-[80px] py-[24px] w-full">
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] size-[32px]">
            <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
              <div className="relative size-[18px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMountain} />
              </div>
            </div>
          </div>
          <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Nativatrips
          </p>
        </div>
        <div className="flex gap-[24px] items-center">
          <a className="font-['Inter:Semi_Bold'] font-semibold text-[14px] text-white uppercase whitespace-nowrap" href="https://example.com/help" target="_blank">
            Ayuda
          </a>
          <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
            <div className="relative size-[18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircleHelp} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative flex flex-col gap-[20px] items-start p-[80px] w-full" data-node-id="1:136">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroBanner} />
          <div className="absolute bg-[rgba(19,32,26,0.7)] inset-0" />
        </div>
        <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal relative text-[#dceb6b] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          48 HORAS PARA TU AVENTURA
        </p>
        <p className="font-['Archivo:Black'] font-black leading-[1.1] relative text-[56px] text-white max-w-[900px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          ¡Prepárate para Lagunas de Siecha!
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative text-[#f5f1e7] text-[18px] max-w-[640px] w-full">
          Hemos reunido toda la información que necesitas para disfrutar al máximo tu recorrido en el páramo.
        </p>
        <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] flex gap-[16px] items-center px-[20px] py-[12px] relative rounded-[8px]">
          <p className="font-['Inter:Bold'] font-bold leading-normal text-[#dceb6b] text-[13px] whitespace-nowrap">CÓDIGO: NT-2025-SIECHA-4729</p>
          <div className="bg-[rgba(255,255,255,0.2)] h-[16px] w-px" />
          <p className="font-['Inter:Regular'] font-normal leading-normal text-[13px] text-white whitespace-nowrap">Sáb 14 Dic 2025</p>
          <div className="bg-[rgba(255,255,255,0.2)] h-[16px] w-px" />
          <p className="font-['Inter:Regular'] font-normal leading-normal text-[13px] text-white whitespace-nowrap">3 personas</p>
        </div>
      </div>

      {/* Content layout */}
      <div className="flex gap-[48px] items-start pb-[96px] pt-[64px] px-[80px] w-full" data-node-id="1:146">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-[48px] items-start min-w-0" data-node-id="1:147">
          {/* Weather card */}
          <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[24px] items-start p-[32px] rounded-[24px] w-full">
            <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              CLIMA PARA EL 14 DE DICIEMBRE
            </p>
            <div className="flex gap-[24px] items-start w-full">
              <div className="flex flex-1 gap-[16px] items-center min-w-0">
                <div className="bg-[#dceb6b] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                    <div className="relative size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgThermometerSun} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start leading-normal whitespace-nowrap">
                  <p className="font-['Archivo:ExtraBold'] font-extrabold text-[#13201a] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>4°C – 12°C</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px]">Temperatura</p>
                </div>
              </div>
              <div className="flex flex-1 gap-[16px] items-center min-w-0">
                <div className="bg-[#dceb6b] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                    <div className="relative size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloudRain} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start leading-normal whitespace-nowrap">
                  <p className="font-['Archivo:ExtraBold'] font-extrabold text-[#13201a] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>Nublado / Lluvia 40%</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px]">Condiciones</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[24px] items-start w-full">
              <div className="flex flex-1 gap-[16px] items-center min-w-0">
                <div className="bg-[#dceb6b] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                    <div className="relative size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWind} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start leading-normal whitespace-nowrap">
                  <p className="font-['Archivo:ExtraBold'] font-extrabold text-[#13201a] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>15 km/h</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px]">Viento</p>
                </div>
              </div>
              <div className="flex flex-1 gap-[16px] items-center min-w-0">
                <div className="bg-[#dceb6b] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                    <div className="relative size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSun} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start leading-normal whitespace-nowrap">
                  <p className="font-['Archivo:ExtraBold'] font-extrabold text-[#13201a] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>5:48 AM – 5:52 PM</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px]">Ciclo solar</p>
                </div>
              </div>
            </div>
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="bg-[#f5f1e7] flex gap-[12px] items-center p-[16px] rounded-[12px] w-full">
              <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                <div className="relative size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlertTriangle} />
                </div>
              </div>
              <p className="flex-1 font-['Inter:Regular'] font-normal leading-[1.4] text-[#13201a] text-[13px] min-w-0">
                El páramo cambia rápidamente. Lleva ropa para frío y lluvia aunque el pronóstico sea favorable.
              </p>
            </div>
          </div>

          {/* Location card */}
          <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[24px] items-start p-[32px] rounded-[24px] w-full">
            <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              DÓNDE ENCONTRARNOS
            </p>
            <div className="flex h-[220px] items-start overflow-clip relative rounded-[12px] w-full">
              <div className="flex-1 h-[220px] min-w-0 relative">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgMapImage} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#13201a] border-2 border-[#dceb6b] flex items-center justify-center left-1/2 rounded-[24px] size-[48px] top-1/2">
                <div className="flex flex-col items-center justify-center overflow-clip size-[24px]">
                  <div className="relative size-[24px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPinCheck} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex gap-[12px] items-start w-full">
                <div className="flex flex-col items-center justify-center overflow-clip size-[20px] shrink-0">
                  <div className="relative size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPin} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px] items-start leading-normal min-w-0">
                  <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[15px] w-full">Parqueadero Monterredondo</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[13px] w-full">Km 32 vía La Calera – Guasca (Dentro del PNN Chingaza)</p>
                </div>
              </div>
              <div className="flex gap-[12px] items-start w-full">
                <div className="flex flex-col items-center justify-center overflow-clip size-[20px] shrink-0">
                  <div className="relative size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlarmClock} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px] items-start leading-normal min-w-0">
                  <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[15px] w-full">Hora de llegada: 5:30 AM</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[13px] w-full">Llegar 30 minutos antes garantiza el registro oportuno con las autoridades del parque.</p>
                </div>
              </div>
              <div className="flex gap-[12px] items-start w-full">
                <div className="flex flex-col items-center justify-center overflow-clip size-[20px] shrink-0">
                  <div className="relative size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUser} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px] items-start leading-normal min-w-0">
                  <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[15px] w-full">Contacto del guía: Camilo Restrepo</p>
                  <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[13px] w-full">WhatsApp +57 310 555 1234</p>
                </div>
              </div>
            </div>
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="bg-[#f5f1e7] flex gap-[12px] items-center p-[16px] rounded-[12px] w-full">
              <div className="flex flex-col items-center justify-center overflow-clip size-[18px] shrink-0">
                <div className="relative size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBus} />
                </div>
              </div>
              <p className="flex-1 font-['Inter:Regular'] font-normal leading-[0] text-[#13201a] text-[13px] min-w-0">
                <span className="leading-[1.4]">Si vienes con transporte contratado, el bus sale a las </span>
                <span className="font-['Inter:Bold'] font-bold leading-[1.4]">4:00 AM</span>
                <span className="leading-[1.4]"> desde el Parque de la 93, Bogotá.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-[48px] items-start min-w-0" data-node-id="1:226">
          {/* Checklist card */}
          <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[24px] items-start p-[32px] rounded-[24px] w-full">
            <div className="flex flex-col font-['Archivo:ExtraBold'] font-extrabold gap-[8px] items-start leading-normal w-full">
              <p className="text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>QUÉ LLEVAR</p>
              <p className="text-[#13201a] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Checklist de preparación</p>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {checklistItems.map((item) => (
                <div key={item} className="flex gap-[12px] items-center w-full">
                  <div className="bg-[#dceb6b] flex items-center justify-center rounded-[12px] shrink-0 size-[24px]">
                    <div className="flex flex-col items-center justify-center overflow-clip size-[14px]">
                      <div className="relative size-[14px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckCircle} />
                      </div>
                    </div>
                  </div>
                  <p className="flex-1 font-['Inter:Regular'] font-normal leading-normal text-[#1a2e26] text-[14px] min-w-0">{item}</p>
                </div>
              ))}
            </div>
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#d32f2f] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                NO SE PERMITE LLEVAR
              </p>
              <div className="flex flex-wrap gap-[16px] items-start w-full">
                {noCarryItems.map((item) => (
                  <div key={item} className="bg-[#fdf2f2] border border-[#f8d7da] flex gap-[6px] items-center px-[12px] py-[6px] rounded-[6px]">
                    <div className="flex flex-col items-center justify-center overflow-clip size-[12px]">
                      <div className="relative size-[12px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgXCircle} />
                      </div>
                    </div>
                    <p className="font-['Inter:Semi_Bold'] font-semibold leading-normal text-[#d32f2f] text-[12px] whitespace-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips card */}
          <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[24px] items-start p-[32px] rounded-[24px] w-full">
            <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              CONSEJOS FINALES
            </p>
            <div className="flex flex-col gap-[16px] items-start w-full">
              {tips.map(({ title, desc }) => (
                <div key={title} className="flex gap-[16px] items-start w-full">
                  <div className="flex flex-col items-center justify-center overflow-clip shrink-0 size-[18px]">
                    <div className="relative size-[18px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHelpCircle} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                    <p className="font-['Inter:Bold'] font-bold leading-normal text-[#1a2e26] text-[14px] whitespace-nowrap">{title}</p>
                    <p className="font-['Inter:Regular'] font-normal leading-[1.4] text-[#55665c] text-[13px] w-full">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#13201a] flex flex-col gap-[48px] items-start pb-[48px] pt-[80px] px-[80px] w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-[16px] items-start w-[400px]">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] size-[32px]">
                <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                  <div className="relative size-[18px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMountain} />
                  </div>
                </div>
              </div>
              <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Nativatrips
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#f5f1e7] text-[14px]">
              Operador de turismo responsable en el PNN Chingaza. Comprometidos con la conservación, las comunidades locales y la desconexión consciente.
            </p>
          </div>
          <div className="flex flex-col gap-[12px] items-start leading-normal text-[14px] whitespace-nowrap">
            <p className="font-['Archivo:Bold'] font-bold text-[#dceb6b] uppercase" style={{ fontVariationSettings: '"wdth" 100' }}>Contacto</p>
            <p className="font-['Inter:Regular'] font-normal text-[#f5f1e7]">reservas@nativatrips.co</p>
            <p className="font-['Inter:Regular'] font-normal text-[#f5f1e7]">+57 310 555 4729</p>
          </div>
          <div className="flex flex-col gap-[12px] items-start">
            <p className="font-['Archivo:Bold'] font-bold leading-normal text-[#dceb6b] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Sígannos</p>
            <div className="flex gap-[16px] items-start">
              <div className="flex flex-col items-center justify-center overflow-clip size-[20px]">
                <div className="relative size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCamera} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-clip size-[20px]">
                <div className="relative size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacebook} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-clip size-[20px]">
                <div className="relative size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageCircle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
          <p className="font-['Inter:Regular'] font-normal leading-normal text-[#55665c] text-[12px] w-full">
            RNT 48291. NativaTrips SAS. Parques Nacionales Naturales de Colombia — Operador Autorizado. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
