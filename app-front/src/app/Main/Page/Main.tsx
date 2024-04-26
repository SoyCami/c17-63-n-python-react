'use client';
import {useEffect, useState} from "react";
import Image from "next/image";

interface MainData{
    imgSrc: string;
    title: string;
    date: string;
    location: string;
}

export default function Main() {
    const [mainEvents, setMainEvents] = useState<MainData[]>([]);
    const [mainCategories, setMainCategories] = useState<MainData[]>([]);

    useEffect(() => {
        const fetchMainData = async () => {
            try {
                const response = await fetch('/api/v1/events/events/');
                const data = await response.json();
                setMainEvents(data);
                setMainCategories(data);
            } catch (error) {
                console.error('Error al obtener los eventos:', error);
            }
        }
        fetchMainData();
    }, []);
    return (
        <div id="Main" className="section relative pt-20 md:pt-16 md:pb-0 bg-white ">

            <div className="container xl:max-w-6xl mx-auto px-4 pb-10">
                <div className="md:flex flex-row items-center pl-16">
                    <div className="md:flex-col items-center pl-16 ">
                        <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">
                            La plataforme que une a las personas y crea comunicades</h1>
                        <p className="py-8 px-3 lg:text-3xl font-light text-[#143C3A] ">
                            Explora y discubre eventos con tus gustos e intereses, conoce personas
                            y comparte experiencias</p>
                        <div
                            className="flex py-3 px-6 w-1/5 items-center justify-center text-white rounded-lg bg-[#143C3A] transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button>Unirse a FindUs</button>
                        </div>
                    </div>
                    <Image
                        width={100}
                        height={100}
                        className=" w-100 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="https://Image.freepik.com/vector-premium/diseno-plano-juventud-dia-gente-abrazando_23-2148600298.jpg"
                        alt=""/>
                </div>
            </div>

            <section>
                <div>
                    <p className="text-[#143C3A] leading-relaxed font-bold text-2xl mx-auto pb-2">Eventos para ti</p>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                </div>
                <div className="flex flex-wrap -mx-3 my-6">
                    {mainEvents.map((event, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                            <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <Image className="w-full h-40 object-cover" src={event.imgSrc} alt="image"/>
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
                <div className="flex flex-wrap -mx-3 my-6">
                    {mainEvents.map((event, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-6">
                            <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer
                                transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <Image className="w-full h-40 object-cover" src={event.imgSrc} alt="image"/>
                                <div className="px-4 py-3 text-left bg-[#E1F1F1]">
                                    <h3 className="text-base leading-normal mb-2 font-semibold text-black">{event.title}</h3>
                                    <p className="text-xs text-[#143C3A]">{event.date} <br/> {event.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className="md:flex space-x-16  ">
                <div className="md:flex items-center pl-16 ">
                    <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">Nuestras categorias
                        principales</h1>
                </div>
            </div>

            <div id="services" className="section relative pt-5 md:pt-5 bg-white flex-row">

                <div className="container xl:max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap flex-row -mx-4  gap-8">
                        <div>

                            <div className=" py-1 px-1 mb-1 ">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Actividades
                                    sociales</h3>
                            </div>

                        </div>

                        <div>
                            <div className="py-1 px-1 mb-1">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                        <path
                                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                        <path
                                            d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Carreras &amp; negocios</h3>
                            </div>

                        </div>
                        <div>

                            <div className="py-1 px-1 mb-1">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                                        <path
                                            d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                                        <path
                                            d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Apoyo y
                                    coaching</h3>
                            </div>

                        </div>
                        <div>

                            <div className="py-1 px-1 mb-1">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                                        <path
                                            d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                                        <path
                                            d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Deportes &amp; fitness</h3>
                            </div>

                        </div>

                        <div>

                            <div className="py-1 px-1 mb-1">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                        <path
                                            d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                                    </svg>
                                </div>

                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Arte &amp; cultura</h3>
                            </div>

                        </div>

                        <div>
                            <div className="py-1 px-1 mb-1">
                                <div
                                    className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                         fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                        <path
                                            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Tecnología</h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="md:flex justify-center">
                <div className="md:flex flex-row rounded-lg  items-center w-4/5 bg-[#CDE7E6]">
                    <div className="md:flex-col items-center pl-16 ">
                        <h3 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">
                            Únete a FindUs</h3>
                        <h4 className="py-8 px-3 lg:text-3xl font-light text-[#143C3A] ">
                            Descubre una comunidad donde puedas compartir y encontrar nuevas experiencias.</h4>
                        <div
                            className="flex py-3 px-6 w-1/3 items-center justify-center text-white rounded-lg bg-[#143C3A] transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button>Registrate</button>
                        </div>
                    </div>
                    <Image
                        width={100}
                        height={100}
                        className="w-100 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="https://i.pinimg.com/originals/5c/69/d7/5c69d7b70bd9dc491421a89a7712e364.jpg"
                        alt=""/>
                </div>
            </div>

        </div>
    );
}