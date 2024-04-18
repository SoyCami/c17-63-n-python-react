import { ReactElement, useState } from "react";

export default function LoginPassword(): ReactElement {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validatePassword = async (passwordValue: string) => {
    // Replace with your actual backend API call or logic
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: passwordValue }),
    });

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
      // Handle successful login (e.g., navigate to another page)
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
          placeholder="Ingrese su contraseña"
          required
        />
        <div className="text-red-500 mt-2">{error}</div>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center mx-auto mt-4 px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white w-700"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
