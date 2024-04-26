export default function HeaderScreen(){
    return(
        <div>
            <nav className="flex items-center py-8 px-60 justify-between bg-[#E0F1F0]">
                <div className="flex items-center gap-20 ">
                    <a href="#">
                        <span className="bg-black rounded-full w-8 h-8"></span>
                        <a href="#" className="font-bold text-xl text-[#143C3A]">FindUs</a>
                    </a>

                </div>

                <div className="flex gap-10 ">
                    <div
                        className="lg:flex hidden items-center space-x-3 py-3 px-6 text-white rounded-lg bg-[#143C3A]  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                        <button>Iniciar sesion</button>
                    </div>
                    <div
                        className="lg:flex hidden items-center space-x-3 py-3 px-6 text-white rounded-lg bg-[#143C3A] transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                        <button>Registrarte</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}