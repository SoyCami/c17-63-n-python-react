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
    // Simulación de datos para probar el componente
    // const mockEventData = {
    //   title: 'Evento de Prueba',
    //   dateTime: '2024-04-24T10:00:00Z',
    //   location: 'Calle Las Flores Nro 151, San Isido, Perú',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipiscing elit potenti netus, eros tortor erat porta non purus scelerisque lacinia, ullamcorper semper torquent porttitor nascetur tristique odio magnis. Consequat dictum gravida cubilia eros montes felis non, aliquam id volutpat at conubia condimentum.',
    //   image: 'https://via.placeholder.com/300',
    //   recommendations: ['Recomendación 1', 'Recomendación 2'],
    //   organizers: ['Organizador 1'],
    // };

    const mockEventData = props.props;

    console.log("props ", mockEventData)

    const dateObj = new Date(mockEventData.dateTime);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });

    setEventData({ ...mockEventData, date, time });
  }, []);

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
      window.location.href = '/login';
    }, 1000);
  };

  return (
    <div className="flex max-h-[90vh] items-center justify-center bg-white">
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="font-normal mb-4 text-black">Para asistir a este evento, debes estar logueado</h2>
            <div className="mt-8 flex items-center justify-center">
              {/* Aquí se cambia el contenido del botón según isLoading */}
              {isLoading ? (
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
              ) : (
                <button onClick={handleLoginPopupClose} className="px-4 py-2 rounded-md bg-[#143C3A] text-white">
                  Ir al Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="rounded-lg bg-gray px-16 py-14 flex" style={{ padding: '30px' }}>
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
                <div className="mx-auto my-2" style={{ maxWidth: '200px' }}>
                  <Image src={eventData.image} alt={eventData.title} width={200} height={200} style={{ borderRadius: '15px' }} />
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
