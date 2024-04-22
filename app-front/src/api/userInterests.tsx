export const fetchEventCategories = async () => {
  const response = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/event_categories/');
  const data = await response.json();
  return data;
};

export const saveUserInterests = async (interests: string[]) => {
  const response = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/user_interests/', {
    method: 'POST',
    body: JSON.stringify({ intereses: interests }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  return response.ok;
};
