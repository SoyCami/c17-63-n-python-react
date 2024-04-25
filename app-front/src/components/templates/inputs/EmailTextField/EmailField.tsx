import React, { ReactElement, useState } from 'react';

export default function EmailField (): ReactElement {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const isValid = validateEmail(event.target.value);
    setError(isValid ? '' : 'Ingresa un correo electrónico válido');
  };

  const validateEmail = (emailValue: string) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
    return regex.test(emailValue);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 text-black font-medium">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingresa tu correo electrónico"
        required
      />
      <div className="text-red-500 mt-2">{error}</div>
    </div>
  );
};

