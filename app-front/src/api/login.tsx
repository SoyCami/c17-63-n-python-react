import axios from 'axios';

export const fetchLoginPage = async () => {
  try {
    const response = await axios.post('https://63pythonreact.pythonanywhere.com/api/v1/users/user/login/', {
      email: 'new@new.com',
      password: 'new',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw new Error('Error al iniciar sesión');
  }
};
