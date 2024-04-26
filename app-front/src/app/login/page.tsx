'use client';
import React, { useState } from 'react';
import EmailField from '@/components/templates/inputs/EmailTextField/EmailField';
import LoginPassword from '@/components/templates/inputs/LoginPassword/LoginPassword';
import { TextButtonIcon } from '@/components/molecules/TextButtonIcon/TextButtonIcon';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(''); // Limpia el mensaje de error al cambiar el correo electrónico
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(''); // Limpia el mensaje de error al cambiar la contraseña
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Debes ingresar este campo.');
        return;
      }

      const response = await axios.post('https://63pythonreact.pythonanywhere.com/api/v1/users/user/login/', {
        email,
        password,
      });
      const user = JSON.stringify(response.data.data)
      localStorage.setItem('user', user);
      
    

      const token = response.data.token;
      localStorage.setItem('token', token);
      
      console.log(response.data)
      // Redirige a la página principal después del inicio de sesión
      router.push('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  
  return (
    <div className="bg-white">

      <form className="flex min-h-screen">
        {/* Container */}
        <div className="flex flex-row w-full">
          {/* Sidebar */}
          <div className='hidden lg:flex flex-col justify-between bg-[#143C3A] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-8 h-8"></span>
              <a href={'register'} className="font-medium text-xl">FindUs</a>
            </div>
            <div className='space-y-5'>
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Entra en tu cuenta y descubre nuevas conexiones</h1>
              <p className="text-lg">¿No tienes una cuenta?</p>
              <a href={'register'}>
              <button  className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Crea una cuenta aquí
              </button>
              </a>
            </div>
            <p className="font-medium">© 2024 FindUs</p>
          </div>

          {/* Login */}
          <div className="flex flex-1 flex-col items-center justify-center px-10 py-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
              <div className="flex items-center justify-start space-x-3">
                <span className="bg-black rounded-full w-6 h-6"></span>
                <a href="#" className="font-medium text-lg">FindUs</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>¿Aún no eres miembro?</span>
                <a href={'register'} className="underline font-medium text-[#070eff]">¡Crea una cuenta aquí!</a>
              </div>
            </div>
            {/* Login box */}
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Iniciar sesión en la cuenta</h2>
                <p className="text-md md:text-xl text-black">Regístrate o inicia sesión</p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">
                
              {/* Email input */}
            <EmailField value={email} onChange={handleEmailChange} />
            {/* Mostrar mensaje de error para el email */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Password input */}
            <LoginPassword value={password} onChange={handlePasswordChange} />
            {/* Mostrar mensaje de error para la contraseña */}
            {error && <p className="text-red-500">{error}</p>}
            <button type="button"
            onClick={handleLogin}
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white hover:bg-black hover:text-white"
            >Iniciar sesión</button> 
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
      </form>
    </div>
  );
}