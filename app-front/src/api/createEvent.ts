export const saveEvent = async (raw: any): Promise<any> => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const resp = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/events/', {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        });

        if (!resp.ok) {
            throw new Error('Error al crear el evento', { cause: { resp } } satisfies {
                cause: { resp: Response };
            });
        }

        return {
            success: true,
            data: await resp.json(),
        };
    } catch (error) {
        return await handleErrors(error);
    }
}