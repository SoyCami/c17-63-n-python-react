import React, { ReactElement, useState } from 'react';

export default function DateField (): ReactElement {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    const isValid = validateDate(event.target.value);
    setError(isValid ? '' : 'Ingresa una fecha válida');
  };

  const validateDate = (dateValue: string) => {
    // Aquí puedes agregar la validación de la fecha que necesites
    // Por ejemplo, puedes verificar que la fecha ingresada no sea futura
    const today = new Date();
    const inputDate = new Date(dateValue);
    return inputDate <= today;
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="date" className="mb-2">Fecha:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
        placeholder="Ingresa la fecha"
        required
      />
      <div className="text-red-500 mt-2">{error}</div>
    </div>
  );
};