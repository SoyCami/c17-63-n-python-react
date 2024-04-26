'use client';
import axios from "axios";
import {useEffect, useState} from "react";

interface TopData {
    imgSrc: string;
    title: string;
    date: string;
    location: string;
}

export default function TopEvents () {
    const [eventsTop, setEventsTop] = useState<TopData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/events.json');
                const { events_top } = response.data;
                setEventsTop(events_top);
            } catch (error) {
                console.error('Error events:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
            <div className="container xl:max-w-6xl mx-auto px-4">

                <section className="text-start  mx-auto mb-12 lg:px-20">
                    <h1 className="text-2xl leading-normal mb-2 font-bold text-black ">Bienvenido, Usuario</h1>
                    <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Eventos para ti</p>
                </section>

                <section>
                    <div>
                        <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-2">Eventos para
                            ti</p>
                        <div className="border-b-2 border-gray-300 my-2"></div>
                    </div>
                    <div className="flex flex-wrap -mx-3 my-6">
                        {eventsTop.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    {/* <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image"/> */}
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                        <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                        <p className="text-xs text-[#143C3A]">{event.date} <br/> {event.location}</p>
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
                        {eventsTop.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    {/* <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image"/> */}
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                        <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                        <p className="text-xs text-[#143C3A]">{event.date} <br/> {event.location}</p>
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
                        {eventsTop.map((event, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    {/* <img className="w-full h-40 object-cover" src={event.imgSrc} alt="image"/> */}
                                    <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                        <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                        <p className="text-xs text-[#143C3A]">{event.date} <br/> {event.location}</p>
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