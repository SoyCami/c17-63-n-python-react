import React, { ReactElement, useState, ChangeEvent } from 'react';

interface EmailFieldProps {
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailField(props: EmailFieldProps): ReactElement {
  const { value, onChange } = props;
  const [error, setError] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    const isValid = validateEmail(event.target.value);
    setError(isValid ? '' : 'Ingresa un correo electrónico válido');
  };

  const validateEmail = (emailValue: string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(emailValue);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 text-black font-medium">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={handleEmailChange}
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingresa tu correo electrónico"
        required
      />
      <div className="text-red-500 mt-2">{error}</div>
    </div>
  );
}
