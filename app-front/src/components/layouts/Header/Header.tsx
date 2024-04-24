import styles from './Header.module.css';

export default function Header(){
    return(
        <div>
            <nav className="flex items-center py-8 px-20 justify-between bg-[#1D5A58]">
                <div className="flex items-center gap-10">
                    <a href="#">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <a href="#" className="font-medium text-xl">FindUs</a>
                    </a>

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
                    <button>Eventos Top</button>
                </div>
                <div
                    className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                    <button>Grupos</button>
                </div>
                <div
                    className="text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer">
                    <button>Crear evento</button>
                </div>
                </div>
            </nav>
        </div>
    );
}