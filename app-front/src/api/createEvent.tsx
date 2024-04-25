interface Event {
    // Define las propiedades del evento aquí
}

interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export const saveEvent = async (event: Event): Promise<ApiResponse> => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    try {
        const resp = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/events/', {
            method: 'POST',
            body: JSON.stringify({ event }),
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include', // Si es necesario
        });

        if (!resp.ok) {
            const errorData = await resp.json();
            return {
                success: false,
                error: errorData.message || 'Error al crear el evento',
            };
        }

        const data = await resp.json();
        return {
            success: true,
            data,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || 'Error al crear el evento',
        };
    }
};