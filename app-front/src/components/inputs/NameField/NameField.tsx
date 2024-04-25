import React, { ChangeEvent } from 'react';

interface NameFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NameField: React.FC<NameFieldProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Nombre y apellidos</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={value}
        onChange={onChange}
        className="px-4 py-2 flex  md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingresa tu nombre y apellidos"
        required
      />
    </div>
  );
};

export default NameField;
