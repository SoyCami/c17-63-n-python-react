import { TextButtonIcon } from '@/components/molecules/TextButtonIcon/TextButtonIcon';
import React from 'react';

export default function RecoverPasswordPage() {
  return (
    <div className="bg-white">
      {/* Example */}
      <div className="flex min-h-screen">
        {/* Container */}
        <div className="flex flex-row w-full">
          {/* Sidebar */}
          <div className='hidden lg:flex flex-col justify-between bg-[#143C3A] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-8 h-8"></span>
              <a href="#" className="font-medium text-xl">FindUs</a>
            </div>
            <div className='space-y-5'>
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Recupera tu cuenta y sigue uniéndote a nosotros</h1>
            
            </div>
            <p className="font-medium">© 2024 FindUs</p>
          </div>

          {/* Login */}
          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
              <div className="flex items-center justify-start space-x-3">
                <span className="bg-black rounded-full w-6 h-6"></span>
                <a href="#" className="font-medium text-lg">FindUs</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>Not a member? </span>
                <a href="#" className="underline font-medium text-[#070eff]">Sign up now</a>
              </div>
            </div>
            {/* Login box */}
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">¿Olvidaste tu contraseña?</h2>
                <p className="mb-4 text-sm text-gray-700">Lo entendemos, a veces suceden cosas.</p>
                 <p className="mb-4 text-sm text-gray-700">¡Ingresa tu dirección de correo electrónico y te enviaremos un enlace a tu correo para restablecer tu contraseña!</p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">                          
                <input type="email" placeholder="Ingresa tu correo electrónico" className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black shadow appearance-none focus:outline-none focus:shadow-outline" />
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Reiniciar contraseña</button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4 text-black">O</span>
                  <span className="w-full border border-black"></span>
                </div>
                
							<div className="text-center">
								<a
									className="inline-block text-sm text-black align-baseline hover:text-blue-800"
									href={'signUp'}
								>
									¡Crear una cuenta!
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-black align-baseline hover:text-blue-800"
									href={'login'}
								>
									¿Ya tienes una cuenta? ¡Inicia sesión aquí!
								</a>
							</div>
                <a href={'recoverPassword'} className="flex justify-center items-center w-full">
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

