export async function getEventCategories() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('ngrok-skip-browser-warning', 'true')
    const response = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/event_categories/',
        {
        method: 'GET',
        headers: myHeaders,
    });
    return await response.json();
}