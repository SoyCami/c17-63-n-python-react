'use client';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

interface IEvent {
    imgSrc: string;
    title: string;
    date: string;
    location: string;
}
  
export default function Home() {
    const [eventsForYou, setEventsForYou] = useState<IEvent[]>([]);
    const [eventsToday, setEventsToday] = useState<IEvent[]>([]);
    const [moreEvents, setMoreEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/events.json');
                const { events_for_you, events_today, more_events } = response.data;
                setEventsForYou(events_for_you);
                setEventsToday(events_today);
                setMoreEvents(more_events);
            } catch (error) {
                console.error('Error events:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <div id="home" className="section relative pt-20 md:pt-16 md:pb-0 bg-white ">
            <div className="container xl:max-w-6xl mx-auto px-4 pb-10">

                <section className="text-start mb-12">
                    <h2 className="text-4xl leading-normal mb-2 font-bold text-[#143C3A]">Bienvenido, Usuario</h2>
                </section>

                <section>
                    <div>
                        <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-2">Eventos para ti</p>
                        <div className="border-b-2 border-gray-300 my-2"></div>
                    </div>
                    <div className="flex flex-wrap -mx-3 my-6">
                        {eventsForYou.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image" />
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                    <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                    <p className="text-xs text-[#143C3A]">{event.date} <br /> {event.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div>
                        <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-1">Eventos de Hoy</p>
                        <div className="border-b-2 border-gray-300 my-2"></div>
                    </div>
                    <div className="flex flex-wrap -mx-3 my-6">
                        {eventsToday.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image" />
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                    <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                    <p className="text-xs text-[#143C3A]">{event.date} <br /> {event.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='my-auto'>
                    <div>
                        <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-1">Más Eventos</p>
                        <div className="border-b-2 border-gray-300 my-2"></div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        {moreEvents.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image" />
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                    <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                    <p className="text-xs text-[#143C3A]">{event.date} <br /> {event.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}