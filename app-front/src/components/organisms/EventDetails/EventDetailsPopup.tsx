'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { IconContext } from 'react-icons';

interface EventData {
  title: string;
  dateTime: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  recommendations?: string[];
  organizers: string[];
}

export default function EventDetailsPopup(props: any) {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const mockEventData = props.props;
    if(mockEventData.recommendations.length == 0) {
      mockEventData.recommendations = ["Presentar tu identificación.", "Llegar 5 minutos antes al evento."]
    }

    const dateObj = new Date(mockEventData.dateTime);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });

    setEventData({ ...mockEventData, date, time });
  }, [props.props]);

  const handleAttendClick = () => {
    if (isLoggedIn) {
      console.log('Mostrar popup de evento reservado');
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLoginPopupClose = () => {
    // Establece el estado de carga antes de redirigir
    setIsLoading(true);
    setTimeout(() => {
      // Simulación de redireccionamiento después de 1 segundo
      window.location.href = '/home';
    }, 1000);
  };

  return (
    <div className="flex max-h-[90vh] items-center justify-center bg-white">
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">

            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>

            <h2 className="font-normal my-4 text-black">Registro Exitoso</h2>
            <div className="mt-8 flex items-center justify-center">
              {/* Aquí se cambia el contenido del botón según isLoading */}
              {isLoading ? (
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
              ) : (
                <span onClick={handleLoginPopupClose} className="px-4 py-2 rounded-md bg-[#143C3A] text-white">
                  Finalizar
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="rounded-lg bg-gray px-16 py-14 flex" style={{ padding: '40px' }}>
        {eventData && (
          <>
            <div className="flex-1">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="my-4 text-3xl font-semibold text-gray-700">{eventData.title}</h1>

                  <div className="flex items-center mb-4">
                    <IconContext.Provider value={{ color: '#143C3A' }}>
                      <FiCalendar className="mr-2" size={22} />
                    </IconContext.Provider>
                    <p className="font-semibold text-gray-700">{eventData.date}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <IconContext.Provider value={{ color: '#143C3A' }}>
                      <FiClock className="mr-2" size={22} />
                    </IconContext.Provider>
                    <p className="font-semibold text-gray-700">{eventData.time}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <IconContext.Provider value={{ color: '#143C3A' }}>
                      <FiMapPin className="mr-2" size={25} />
                    </IconContext.Provider>
                    <p className="font-semibold text-gray-700">{eventData.location}</p>
                  </div>
                </div>
                <div className="mx-auto my-2" style={{ maxWidth: '300px' }}>
                  <Image src={eventData.image ?
                      `https://63pythonreact.pythonanywhere.com${eventData.image}`
                      : "https://assets-global.website-files.com/643ec769187f070822a2151e/6572194898bc5ea8e31a9cad_97-Crea-un-espacio-de-meditacio%CC%81n-en-casa-y-rela%CC%81jate-despue%CC%81s-de-un-di%CC%81a-pesado.webp"
                  } alt={eventData.title} width={300} height={300} style={{ borderRadius: '15px' }} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-700">Acerca del evento:</span>
                <p className="flex mx-auto text-gray-600">{eventData.description}</p>
              </div>
              {eventData.recommendations && (
                <div className="mt-4">
                  <span className="text-lg font-semibold text-gray-700">Recomendaciones:</span>
                  <ul className="list-disc ml-6">
                    {eventData.recommendations.map((recommendation, id) => (
                      <li key={id} className="text-gray-600">
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4">
                <span className="text-lg font-semibold text-gray-700">Organizadores:</span>
                <ul className="list-disc ml-6">
                  {eventData.organizers.map((organizer, id) => (
                    <li key={id} className="text-gray-600">
                      {organizer}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <button
                  onClick={handleAttendClick}
                  className="block rounded-xl border-4 border-transparent bg-[#143C3A] px-12 py-2 text-center text-lg font-medium text-white outline-8 hover:outline hover:duration-300"
                >
                  ¡Quiero Asistir!
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
