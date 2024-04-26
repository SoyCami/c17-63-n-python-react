import React, { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface LoginPasswordProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginPassword(props: LoginPasswordProps): ReactElement {
  const { value, onChange } = props;

  return (
    <form>
      <div className="flex flex-col text-black">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={value} // Utiliza el valor proporcionado por el padre
          onChange={onChange} // Propaga el evento de cambio al padre
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>
    </form>
  );
}
