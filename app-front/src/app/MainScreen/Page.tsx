
export default function MainScreen () {
    return (
        <div>
            <header className="min-h-screen bg-white ">
                <div>
                    <div className="relative pt-2 lg:pt-8">

                        <div className="md:flex items-center pl-16 ">
                            <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">Bienvenido, usuario</h1>
                        </div>

                        <div className="md:flex flex-row">
                            <div
                                className="lg:flex hidden items-center space-x-3 py-3 px-6 text-[#1D5A58] rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                                <button>Todo</button>
                            </div>
                            <div
                                className="lg:flex hidden items-center space-x-3 py-3 px-6 text-[#1D5A58] rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                                <button>Para ti</button>
                            </div>
                            <div
                                className="lg:flex hidden items-center space-x-3 py-3 px-6 text-[#1D5A58] rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                                <button>Online</button>
                            </div>
                            <div
                                className="lg:flex hidden items-center space-x-3 py-3 px-10 text-[#1D5A58] rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                                <button>Presencial</button>
                            </div>
                            <div
                                className="lg:flex hidden items-center space-x-3 py-3 px-10 text-[#1D5A58] rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                                <button>Esta semana</button>
                            </div>
                        </div>

                        <div className="bg-cover w-full flex justify-center items-center gap-3">
                            <div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article
                                        className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                        <div className=" w-full mb-6">
                                            <img
                                                className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                alt=""/>
                                        </div>
                                        <div className=" justify-between flex-col items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                            a la
                                                            nube</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    09 de Abril, 18:00 (GMT -5)
                                                </div>
                                                <div className="text-sm flex items-center text-[#143C3A] ">
                                                    Online
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
}