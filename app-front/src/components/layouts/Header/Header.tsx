import Link from 'next/link';
import styles from './Header.module.css';

export default function Header(){
    const handleCreateEvent = () => {
        window.location.href = '/createEvent';
    };
    return(
        <div>
            <nav className="max-w-screen flex items-center py-8 px-60 justify-between bg-[#1D5A58]">
                <div className="flex items-center gap-10">
                    <Link href="/">
                        <span>
                            <span className="bg-black rounded-full w-8 h-8"></span>
                            <span className="font-medium text-xl">FindUs</span>
                        </span>
                    </Link>

                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input
                            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Busca un evento"/>
                    </div>
                </div>

                <div className="lg:flex flex-row gap-10">
                    <div
                        className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                        <button>Inicio</button>
                    </div>
                    <div
                        className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                        <button onClick={handleCreateEvent}>Crear evento</button>
                    </div>
                    <div
                        className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                        <button>Mis Eventos</button>
                    </div>
                    <div
                        className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                        <button>Mi Perfil</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}