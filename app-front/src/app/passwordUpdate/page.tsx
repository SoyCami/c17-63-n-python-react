'use client';
import { useState } from 'react';

export default function PasswordUpdate() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Validar que la contraseña cumpla con los criterios
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setError('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial');
      return;
    }

    // Enviar la nueva contraseña al backend para actualizarla en la base de datos
    // Aquí va la lógica para enviar la nueva contraseña
    console.log('Nueva contraseña:', newPassword);

    // Limpiar errores y mostrar éxito
    setError('');
    setSuccess(true);
  };

  const handlePopupClose = () => {
    setSuccess(false);
    // Aquí puedes añadir la lógica para redirigir a la pantalla de usuario logueado
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
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Restablece tu cuenta y sigue uniéndote a nosotros</h1>
            </div>
            <p className="font-medium">© 2024 FindUs</p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
              <h2 className="text-3xl font-extrabold text-black">Restablecer contraseña</h2>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    Nueva Contraseña
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    required
                    value={newPassword}
                    onChange={handleChangeNewPassword}
                    className={`mt-1 block w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black shadow appearance-none focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`}
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmar Contraseña
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                    className={`mt-1 block w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black shadow appearance-none focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`}
                  />
                  {error && <p className="text-red-600">{error}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center px-3 py-2 md:px-4 md:py-3 text-sm font-medium border-2 rounded-lg border-black bg-black text-white"
                  >
                    Restablecer contraseña
                  </button>
                </div>
              </form>
            </div>
            {success && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <p className="text-lg font-bold mb-4">Contraseña actualizada correctamente</p>
                  <button
                    onClick={handlePopupClose}
                    className="px-4 py-2 bg-black text-white rounded-lg font-medium"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
