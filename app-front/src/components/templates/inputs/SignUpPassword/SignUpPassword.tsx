import React, { ReactElement, useState } from 'react';
import SignUpPage from '../../../../app/signUp/page';

export default function SignUpPassword(): ReactElement {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const isValid = validatePassword(event.target.value);
    setError(isValid ? '' : 'Ingrese una contraseña válida');
  };

  const validatePassword = (passwordValue: string) => {
    // Regular expression for password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
    return regex.test(passwordValue);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="password" className="mb-2">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingrese su contraseña"
        required
      />
      <div className="text-red-500 mt-2">{error}</div>
    </div>
  );
};