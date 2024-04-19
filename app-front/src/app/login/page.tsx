'use client';
import { TextButtonIcon } from '@/components/molecules/TextButtonIcon/TextButtonIcon';
import EmailField from '@/components/templates/inputs/EmailTextField/EmailField';
import LoginPassword from '@/components/templates/inputs/LoginPassword/LoginPassword';

export default function LoginPage() {
 
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
              <a href={'signUp'} className="font-medium text-xl">FindUs</a>
            </div>
            <div className='space-y-5'>
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Entra en tu cuenta y descubre nuevas conexiones</h1>
              <p className="text-lg">¿No tienes una cuenta?</p>
              <a href={'signUp'}>
              <button  className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Crea una cuenta aquí
              </button>
              </a>
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
                <span>¿Aún no eres miembro?</span>
                <a href={'signUp'} className="underline font-medium text-[#070eff]">¡Crea una cuenta aquí!</a>
              </div>
            </div>
            {/* Login box */}
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Iniciar sesión en la cuenta</h2>
                <p className="text-md md:text-xl text-black">Regístrate o inicia sesión</p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">
                
              <EmailField/>
              <LoginPassword />
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4 text-black">O</span>
                  <span className="w-full border border-black"></span>
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-white text-black hover:bg-black hover:text-white">Inicia sesión con...</button>
                <a href={'recoverPassword'} className="flex justify-center items-center w-full">
              <TextButtonIcon
                className="hover:text-blue-800"
                color="black"
                fontSizeTitle="sm"
                text="¿Olvidaste tu contraseña?"
              />
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

