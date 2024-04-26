export const fetchHomeUser = async () => {
    try {
        const response = await fetch('/events.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

interface IResponse {
    interests: string[],
    monthly: string[],
    more: string[],
}

export const fetchHomeUserApi = async (token: any) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Token ${token}`)

    try {
        const resp = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/events/', {
            method: 'GET',
            headers: myHeaders
        });

        return await resp.json()
    } catch (error) {
        console.error('Error:', error);
        return null;
    }

};