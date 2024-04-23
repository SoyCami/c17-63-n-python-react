'use client';
import { useState } from 'react';

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successPopupOpen, setSuccessPopupOpen] = useState(false);
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);

    // Valida el formato del correo electrónico
    const isValidEmail = validateEmail(value);
    setError(isValidEmail ? '' : 'Ingresa un correo electrónico válido');
  };

  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleResetPassword = () => {
    // Si no hay un correo válido, muestra un mensaje de error
    if (!validateEmail(email)) {
      setErrorPopupOpen(true);
      return;
    }

    // Envía el proceso de recuperación de contraseña al correo electrónico del usuario
    // Se simula aquí, ya que el servidor y la lógica real dependen del backend
    console.log(`Se enviará el proceso de recuperación de contraseña a: ${email}`);

    // Simulación de éxito
    setSuccessPopupOpen(true);
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className="bg-white">
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

          {/* Recover Password */}
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
            {/*  Recover Password box */}
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">¿Olvidaste tu contraseña?</h2>
                <p className="mb-4 text-sm text-gray-700">Lo entendemos, a veces suceden cosas.</p>
                <p className="mb-4 text-sm text-gray-700">¡Ingresa tu dirección de correo electrónico y te enviaremos un enlace a tu correo para restablecer tu contraseña!</p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">                          
                <input 
                  type="email" 
                  placeholder="Ingresa tu correo electrónico" 
                  value={email} 
                  onChange={handleEmailChange} 
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black shadow appearance-none focus:outline-none focus:shadow-outline" 
                />
                <div className="text-red-500 mt-1">{error}</div>
                <button 
                  onClick={handleResetPassword}
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                >
                  Recuperar contraseña
                </button>
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

      {/* Popup de éxito */}
      {successPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-800">¡Hemos enviado la recuperación de contraseña al correo electrónico:</p>
            <p className="text-lg text-gray-800 font-bold">{email}!</p>
            <button onClick={closeSuccessPopup} className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#143C3A]">Cerrar</button>
          </div>
        </div>
      )}

      {/* Popup de error */}
      {errorPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-lg text-red-500">No se ha enviado el proceso de recuperación de contraseña porque el correo electrónico no es válido.</p>
            <button onClick={closeErrorPopup} className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#143C3A]">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
