import React from 'react';

interface LastNameFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LastNameField: React.FC<LastNameFieldProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Apellidos</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={value}
        onChange={onChange}
        className="px-4 py-2 flex  md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingresa tus apellidos"
        required
      />
    </div>
  );
};

export default LastNameField;
