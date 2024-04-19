import styles from './Header.module.css';

export default function Header(){
    return(
        <div>
            <nav className="flex items-center py-8 px-20 justify-between bg-[#1D5A58]">
                <div className="flex items-center">
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


                <div
                    className="lg:flex hidden items-center space-x-3 py-3 px-6 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                    <button>Inicio</button>
                </div>
                <div
                    className="lg:flex hidden items-center space-x-3 py-3 px-6 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                    <button>Eventos Top</button>
                </div>
                <div
                    className="lg:flex hidden items-center space-x-3 py-3 px-6 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                    <button>Grupos</button>
                </div>
                <div
                    className="lg:flex hidden items-center space-x-3 py-3 px-10 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                    <button>Crear evento</button>
                </div>
            </nav>
        </div>
    );
}