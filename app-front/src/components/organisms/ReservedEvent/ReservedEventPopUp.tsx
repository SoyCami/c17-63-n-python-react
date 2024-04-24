import React, { useState, useEffect } from 'react';

//tipo para los datos del evento
interface EventData {
  title: string;
  description: string;
  recommendations: string[]; // Creé las recomendaciones como adenas
}

export default function ReservedEventPopUp() {
  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch('https://ejemplo.com/datos-evento');
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error al obtener los datos del evento:', error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-gray-50 px-16 py-14">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">{eventData ? eventData.title : 'Cargando...'}</h3>
        <p className="w-[230px] text-center font-normal text-gray-600">{eventData ? eventData.description : 'Cargando...'}</p>
        {/* Renderiza las recomendaciones si están disponibles */}
        {eventData && eventData.recommendations && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700">Recomendaciones:</h4>
            <ul className="list-disc ml-6">
              {eventData.recommendations.map((recommendation, id) => (
                <li key={id} className="text-gray-600">{recommendation}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-[#143C3A] px-6 py-3 text-center text-base font-medium text-white outline-8 hover:outline hover:duration-300">Finalizar</button>
      </div>
    </div>
  );
}
