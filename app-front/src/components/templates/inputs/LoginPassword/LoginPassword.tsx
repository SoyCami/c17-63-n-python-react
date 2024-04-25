import { ReactElement, useState } from "react";

export default function LoginPassword(): ReactElement {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validatePassword = async (passwordValue: string) => {
   
    const response = await fetch('https://3570-38-56-113-35.ngrok-free.app/api/v1/users/user/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({ email: 'new@new.com', password: 'new'})
    });

    console.log("🚀 ~ validatePassword ~ response:", await response.json());

    if (!response.ok) {
      setError('Contraseña incorrecta'); // Set error message
      return false; // Indicate validation failure
    }

    setError(''); // Clear error message on successful validation
    return true; // Indicate validation success (optional)
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    if (await validatePassword(password)) {

      console.log('Login successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal text-black"
          placeholder="Ingresa tu contraseña"
          required
        />
        <div className="text-red-500 mt-2">{error}</div>
      </div>
      <button
        onClick={() => validatePassword(password)}
        type="submit"
        className="flex items-center justify-center mx-auto mt-4 px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white w-700"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
