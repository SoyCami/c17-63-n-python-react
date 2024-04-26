export default function FooterScreen() {
    return(
        <div>
            <footer className="bg-[#143C3A] ">
                <div className="container px-60 py-12 mx-auto w-screen relative bottom-0 ">
                    <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-4">
                        <div>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#"
                                   className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Iniciar
                                    Sesión</a>
                                <a href="#"
                                   className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Regístrate</a>
                            </div>
                        </div>

                        <div>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#"
                                   className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Eventos</a>
                                <a href="#"
                                   className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Grupos</a>
                                <a href="#"
                                   className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Categorias</a>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Nosotros</a>
                                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Ayuda</a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>

                    <div className="flex items-center justify-between">
                        <a href="#">
                            <span className="bg-black rounded-full w-8 h-8"></span>
                            <a href="#" className="font-medium text-xl">2024 FindUs</a>
                        </a>

                    </div>
                </div>
            </footer>
        </div>
    );
}