'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const events = [
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVumWgDx7_wRxavBmL7YwsamagRZyDCUdW8VHoIE56Q&s",
            title: "Taller VueJs",
            date: "10 de Abril, 18:00(GMT -5)",
            location: "Online"
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVumWgDx7_wRxavBmL7YwsamagRZyDCUdW8VHoIE56Q&s",
            title: "Taller VueJs",
            date: "10 de Abril, 18:00(GMT -5)",
            location: "Online"
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVumWgDx7_wRxavBmL7YwsamagRZyDCUdW8VHoIE56Q&s",
            title: "Taller VueJs",
            date: "10 de Abril, 18:00(GMT -5)",
            location: "Online"
        }
    ];


    return (
        <div id="home" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white my-auto">
            <div className="container xl:max-w-6xl mx-auto px-4">

                <section className="text-start  mx-auto mb-12">
                    <h2 className="text-4xl leading-normal mb-2 font-bold text-[#143C3A]">Bienvenido, Usuario</h2>
                    
                </section>

                <section>
                    <div>
                        <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-2">Eventos para ti</p>
                        <div className="border-b-2 border-gray-300 my-2"></div>
                    </div>
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        {events.map((event, index) => (
                            <div key={index} className="w-full lg:w-1/4 rounded overflow-hidden shadow-lg m-3 cursor-pointer">
                            <img className="w-full" src={event.imgSrc} alt="image" />
                            <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                <p className="text-gray-500">{event.date} <br /> {event.location}</p>
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
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        {events.map((event, index) => (
                            <div key={index} className="w-full lg:w-1/4 rounded overflow-hidden shadow-lg m-3 cursor-pointer">
                            <img className="w-full" src={event.imgSrc} alt="image" />
                            <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                <p className="text-gray-500">{event.date} <br /> {event.location}</p>
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
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        {events.map((event, index) => (
                            <div key={index} className="w-full lg:w-1/4 rounded overflow-hidden shadow-lg m-3 cursor-pointer">
                            <img className="w-full" src={event.imgSrc} alt="image" />
                            <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                <p className="text-gray-500">{event.date} <br /> {event.location}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}