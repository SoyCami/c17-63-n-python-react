'use client';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

import { IoMdCloseCircleOutline } from "react-icons/io";
import EventDetailsPopup from "@/components/organisms/EventDetails/EventDetailsPopup";
import { fetchHomeUser, fetchHomeUserApi } from "@/api/homeUser"
import Image from 'next/image';
import Header from '@/components/layouts/Header/Header';
import Footer from '@/components/layouts/Footer/Footer';

interface IEvent {
    id: number;
    event_name: string;
    event_description: string;
    event_category: {
        id: number;
        name: string;
        description: string;
        image: string | null;
    };
    event_date: string;
    event_hour: string;
    event_location: string;
    event_organizer: {
        id: number;
        email: string;
        name: string;
        last_name: string;
        phone: string;
    };
    is_online: boolean;
    event_picture: string;
    has_limit: boolean;
    limit: number | null;
    paid: boolean;
    price: number | null;
    recommendations: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

interface IEventData {
    title: string;
    dateTime: string;
    location: string;
    description: string;
    image: string;
    recommendations?: string | [];
    organizers: string[];
  }

interface IUserData {
    email: string;
    has_selected_categories: boolean;
    id: number;
    last_name: string;
    name: string;
    phone: string;
    user_type: string;
    username: string;
}
  
export default function Home() {
    const [eventsForYou, setEventsForYou] = useState<IEvent[]>([]);
    const [eventsMonthly, setEventsToday] = useState<IEvent[]>([]);
    const [moreEvents, setMoreEvents] = useState<IEvent[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventDetails, setEventDetails] = useState<IEventData | {}>();
    const [userDetail, setUser] = useState<IUserData>();

    const openModal = (eventDetail: IEventData) => {
        setEventDetails(eventDetail)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEventDetails({})
        setIsModalOpen(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userLocal = localStorage.getItem('user');
        if (userLocal !== null) {
            const userData: IUserData = JSON.parse(userLocal);
            setUser(userData);
        }
        fetchHomeUserApi(token).then(data => {
            setEventsForYou(data.interests)
            setEventsToday(data.monthly)
            setMoreEvents(data.more)
        });
        
    }, []);


    return (
        <>
            <Header/>
            <div id="home" className="max-w-full section relative pt-20 md:pt-16 md:pb-0 bg-white ">
                <div className="container xl:max-w-6xl mx-auto px-4 pb-10">

                    <section className="text-start mb-12">
                        <h2 className="text-4xl leading-normal mb-2 font-bold text-[#143C3A]">Bienvenido, {userDetail?.name}</h2>
                    </section>

                    <section>
                        <div>
                            <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-2">Eventos para ti</p>
                            <div className="border-b-2 border-gray-300 my-2"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-6">
                            {eventsForYou && eventsForYou.slice(0, 4).map((event, index) => (
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2" 
                                    key={index}
                                    onClick={() => openModal({
                                        title: event.event_name,
                                        dateTime: event.event_date,
                                        location: event.event_location,
                                        description: event.event_description,
                                        image: event.event_picture,
                                        recommendations: event.recommendations ?? [],
                                        organizers: ['internationalHyena242'],
                                    })}>
                                    <div key={index} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                        {/* <img className="w-full h-40 object-cover" src={event.event_picture} alt="image" /> */}
                                        <Image src={event.event_picture ?? 
                                            "https://assets-global.website-files.com/643ec769187f070822a2151e/6572194898bc5ea8e31a9cad_97-Crea-un-espacio-de-meditacio%CC%81n-en-casa-y-rela%CC%81jate-despue%CC%81s-de-un-di%CC%81a-pesado.webp"
                                        } alt={'image'} width={200} height={200} className="w-full h-40 object-cover" />
                                        <div className="grid h-[120px] px-4 py-3 text-left bg-[#E1F1F1]">
                                            <h3 className="text-base leading-normal font-semibold text-black mb-2">{event.event_name}</h3>
                                            <p className="text-xs text-[#143C3A]">{event.event_date} <br /> {event.event_location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                    <section>
                        <div>
                            <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-1">Eventos del Mes</p>
                            <div className="border-b-2 border-gray-300 my-2"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-6">
                            {eventsMonthly && eventsMonthly.slice(0, 4).map((event, index) => (
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2" 
                                    key={index}
                                    onClick={() => openModal({
                                        title: event.event_name,
                                        dateTime: event.event_date,
                                        location: event.event_location,
                                        description: event.event_description,
                                        image: event.event_picture,
                                        recommendations: event.recommendations ?? [],
                                        organizers: ['internationalHyena242'],
                                    })}>
                                    <div key={index} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                        <Image src={event.event_picture ?? 
                                            "https://assets-global.website-files.com/643ec769187f070822a2151e/6572194898bc5ea8e31a9cad_97-Crea-un-espacio-de-meditacio%CC%81n-en-casa-y-rela%CC%81jate-despue%CC%81s-de-un-di%CC%81a-pesado.webp"
                                        } alt={'image'} width={200} height={200} className="w-full h-40 object-cover" />
                                        <div className="grid h-[120px] px-4 py-3 text-left bg-[#E1F1F1]">
                                            <h3 className="text-base leading-normal font-semibold text-black mb-2">{event.event_name}</h3>
                                            <p className="text-xs text-[#143C3A]">{event.event_date} <br /> {event.event_location}</p>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-6">
                            {moreEvents && moreEvents.slice(0, 8).map((event, index) => (
                                <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2" 
                                    key={index}
                                    onClick={() => openModal({
                                        title: event.event_name,
                                        dateTime: event.event_date,
                                        location: event.event_location,
                                        description: event.event_description,
                                        image: event.event_picture,
                                        recommendations: event.recommendations ?? [],
                                        organizers: ['internationalHyena242'],
                                    })}>
                                    <div key={index} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                        <Image src={event.event_picture ?? 
                                            "https://assets-global.website-files.com/643ec769187f070822a2151e/6572194898bc5ea8e31a9cad_97-Crea-un-espacio-de-meditacio%CC%81n-en-casa-y-rela%CC%81jate-despue%CC%81s-de-un-di%CC%81a-pesado.webp"
                                        } alt={'image'} width={200} height={200} className="w-full h-40 object-cover" />
                                        <div className="grid h-[120px] px-4 py-3 text-left bg-[#E1F1F1]">
                                            <h3 className="text-base leading-normal font-semibold text-black mb-2">{event.event_name}</h3>
                                            <p className="text-xs text-[#143C3A]">{event.event_date} <br /> {event.event_location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                {isModalOpen && ( 
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                        <div className="grid content-center bg-white w-1/2 h-[95vh] rounded-xl text-black p-2 relative">
                            <IoMdCloseCircleOutline onClick={closeModal} size={40} className="self-end cursor-pointer absolute top-0 right-0 m-4 text-[#143C3A]"/>
                            <EventDetailsPopup props={eventDetails}/>
                            
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
        
    );
}