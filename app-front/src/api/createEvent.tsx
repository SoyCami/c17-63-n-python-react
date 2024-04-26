interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export const saveEvent = async (formData: FormData, token: any): Promise<ApiResponse> => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Token ${token}`)

    try {
        console.log('formData', formData)
        const resp = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/events/', {
            method: 'POST',
            body: formData,
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
        });

        if (!resp.ok) {
            const errorData = await resp.json();
            console.log(errorData)
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