import React, { ReactElement, useState } from 'react';
import SignUpPage from '../../../../app/register/page';

export default function SignUpPassword(): ReactElement {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const isValid = validatePassword(event.target.value);
    setError(isValid ? '' : 'La contraseña debe tener mínimo 8 caracteres.');
  };

  const validatePassword = (passwordValue: string) => {
    // Regular expression for password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
    return regex.test(passwordValue);
  };
  return (
    <div className="flex flex-col">
    <p className="text-sm text-gray-500 mb-2">La contraseña debe tener al menos: 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial.</p>
    <input
      type="password"
      id="password"
      value={password}
      onChange={handlePasswordChange}
      className="flex px-3 py-2.5 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
      placeholder="Ingresa tu contraseña"
      required
    />
      <div className="text-red-500 mt-2">{error}</div>
    </div>
  );
};