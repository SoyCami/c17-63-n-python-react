export const fetEventData = async () => {
    const response = await fetch ('/api/v1/events/events/{id}/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({ 
            id: 1,
    })
    })
    const data = await response.json()

    return data
}
