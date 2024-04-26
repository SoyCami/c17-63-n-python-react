import Link from 'next/link';

export default function Footer() {
    return(
        <div>
            <footer className="max-w-screen bg-[#143C3A]">
                <div className="container px-60 py-12 mx-auto w-screen relative bottom-0 ">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Suscribete a nuestro sitio web para más información.</h1>

                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border-transparent rounded-md focus:outline-none focus:ring focus:ring-[#143C3A]" placeholder="Correo electronico"/>

                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-black rounded-lg hover:bg-[#A6D3D1] focus:ring focus:ring-[#A6D3D1]">
                                    Suscribirse
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Enlace rapido</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link href="/">Inicio</Link>
                                <Link href="/about">Quienes somos</Link>
                                <Link href="/philosophy">Nuestra filosofia</Link>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Industrias</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link href="/ecommerce">E-Commerce</Link>
                                <Link href="/events">Eventos</Link>
                                <Link href="/volunteering">Voluntariados</Link>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>

                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <span>
                                <span className="bg-black rounded-full w-8 h-8"></span>
                                <span className="font-medium text-xl">FindUs</span>
                            </span>
                        </Link>

                        <div className="flex -mx-2">
                            <Link href="#" aria-label="Reddit">...</Link>
                            <Link href="#" aria-label="Facebook">...</Link>
                            <Link href="#" aria-label="Github">...</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}