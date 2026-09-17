const assetPathPrefix = "/assets";
const imgTrailThumbnail = `${assetPathPrefix}/fbb43.png`;
const imgMountain = `${assetPathPrefix}/4befd.svg`;
const imgCircleHelp = `${assetPathPrefix}/23837.svg`;
const imgCheckCircle = `${assetPathPrefix}/e7b7e.svg`;
const imgCopy = `${assetPathPrefix}/a31fc.svg`;
const imgLine = `${assetPathPrefix}/ff329.svg`;
const imgMessageCircle = `${assetPathPrefix}/bd016.svg`;
const imgCamera = `${assetPathPrefix}/dcd91.svg`;
const imgFacebook = `${assetPathPrefix}/62d18.svg`;
const imgMessageCircle1 = `${assetPathPrefix}/b67ef.svg`;
const imgLine1 = `${assetPathPrefix}/40157.svg`;

export default function BookingConfirmation() {
  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen" data-node-id="1:2">
      {/* Header */}
      <div className="bg-[#13201a] flex items-center justify-between px-[80px] py-[24px] w-full" data-node-id="1:3">
        <div className="flex gap-[8px] items-center" data-node-id="1:4">
          <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] size-[32px]" data-node-id="1:5">
            <div className="flex flex-col items-center justify-center overflow-clip size-[18px]" data-node-id="1:6">
              <div className="relative size-[18px]" data-node-id="1:7">
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

      {/* Main content */}
      <div className="flex flex-col gap-[48px] items-center pb-[96px] pt-[64px] px-[220px] w-full" data-node-id="1:15">
        {/* Success heading */}
        <div className="flex flex-col gap-[16px] items-center w-full" data-node-id="1:16">
          <div className="bg-[#dceb6b] flex items-center justify-center rounded-[32px] size-[64px]">
            <div className="flex flex-col items-center justify-center overflow-clip size-[32px]">
              <div className="relative size-[32px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckCircle} />
              </div>
            </div>
          </div>
          <p className="font-['Archivo:Black'] font-black leading-normal text-[#13201a] text-[48px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            ¡Reserva confirmada!
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-normal text-[#55665c] text-[18px] text-center w-full">
            Tu aventura en Chingaza está asegurada.
          </p>
        </div>

        {/* Booking code card */}
        <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[16px] items-center p-[32px] rounded-[24px] w-full" data-node-id="1:23">
          <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            TU CÓDIGO DE RESERVA
          </p>
          <div className="flex gap-[16px] items-center justify-center">
            <p className="font-['Archivo:Black'] font-black leading-normal text-[#13201a] text-[36px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              NT-2025-SIECHA-4729
            </p>
            <button
              className="bg-[#f5f1e7] flex items-center justify-center p-[8px] rounded-[8px] cursor-pointer"
              onClick={() => navigator.clipboard.writeText('NT-2025-SIECHA-4729')}
              aria-label="Copiar código"
            >
              <div className="flex flex-col items-center justify-center overflow-clip size-[18px]">
                <div className="relative size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
                </div>
              </div>
            </button>
          </div>
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-normal text-[#13201a] text-[14px] text-center w-full">
            Guarda este código. Es tu único comprobante para el día del recorrido.
          </p>
        </div>

        {/* Summary card */}
        <div className="bg-white border border-[#e6e1d5] flex flex-col gap-[24px] items-start p-[32px] rounded-[24px] w-full" data-node-id="1:32">
          <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            DETALLE DE TU RESERVA
          </p>
          <div className="flex gap-[24px] items-center w-full">
            <div className="h-[70px] relative rounded-[12px] shrink-0 w-[100px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full" src={imgTrailThumbnail} />
            </div>
            <div className="flex flex-1 flex-col gap-[4px] items-start leading-normal min-w-0">
              <p className="font-['Archivo:ExtraBold'] font-extrabold text-[#13201a] text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Sendero Lagunas de Siecha
              </p>
              <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[14px] w-full">
                Parque Nacional Natural Chingaza, Colombia
              </p>
            </div>
          </div>
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex gap-[24px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Fecha</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[16px]">Sábado 14 Dic 2025</p>
              </div>
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Hora de Encuentro</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[16px]">6:00 AM (Puntual)</p>
              </div>
            </div>
            <div className="flex gap-[24px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Punto de Encuentro</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[16px]">Parqueadero Monterredondo, Sector Siecha</p>
              </div>
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Grupo</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[16px]">3 personas</p>
              </div>
            </div>
            <div className="flex gap-[24px] items-start w-full">
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Titular</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#1a2e26] text-[16px]">Juan Sebastián Mora</p>
              </div>
              <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal text-[#55665c] text-[12px] uppercase">Total Pagado</p>
                <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#13201a] text-[20px]">$765.000 COP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-[16px] items-start justify-center w-full">
          <button className="bg-[#dceb6b] flex items-center px-[28px] py-[14px] rounded-[999px] cursor-pointer">
            <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[15px] whitespace-nowrap">
              Descargar comprobante PDF ↗
            </p>
          </button>
          <button className="bg-white border border-[#13201a] flex items-center px-[28px] py-[14px] rounded-[999px] cursor-pointer">
            <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[15px] whitespace-nowrap">
              Enviar por correo ↗
            </p>
          </button>
        </div>

        {/* Next steps */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#55665c] text-[12px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            QUÉ SIGUE
          </p>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {[
              { n: '1', text: 'Recibirás un correo de confirmación en los próximos minutos con todos los detalles.' },
              { n: '2', text: '48 horas antes de tu recorrido te enviaremos la información de preparación: clima, qué llevar y punto de encuentro exacto.' },
              { n: '3', text: 'El día del recorrido, presenta tu código de reserva NT-2025-SIECHA-4729 al guía en el punto de encuentro.' },
            ].map(({ n, text }) => (
              <div key={n} className="flex gap-[16px] items-center w-full">
                <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
                  <p className="font-['Archivo:ExtraBold'] font-extrabold leading-normal text-[#13201a] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{n}</p>
                </div>
                <p className="flex-1 font-['Inter:Regular'] font-normal leading-[1.5] text-[#1a2e26] text-[15px] min-w-0">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help banner */}
        <div className="bg-[#13201a] flex items-center justify-between p-[24px] rounded-[16px] w-full">
          <div className="flex flex-col gap-[4px] items-start leading-normal w-[450px]">
            <p className="font-['Archivo:Bold'] font-bold text-[#dceb6b] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              ¿Necesitas modificar tu reserva o tienes preguntas?
            </p>
            <p className="font-['Inter:Regular'] font-normal text-[#f5f1e7] text-[14px]">
              Escríbenos directamente o envíanos un correo electrónico.
            </p>
          </div>
          <div className="flex gap-[16px] items-start">
            <div className="bg-[#dceb6b] flex gap-[8px] items-center px-[16px] py-[8px] rounded-[999px]">
              <div className="flex flex-col items-center justify-center overflow-clip size-[16px]">
                <div className="relative size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageCircle} />
                </div>
              </div>
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[13px] whitespace-nowrap">WhatsApp</p>
            </div>
            <div className="border border-[#f5f1e7] flex items-center px-[16px] py-[8px] rounded-[999px]">
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#f5f1e7] text-[13px] whitespace-nowrap">reservas@nativatrips.co</p>
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
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageCircle1} />
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
