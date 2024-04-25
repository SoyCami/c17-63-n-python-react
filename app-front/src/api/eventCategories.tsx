export async function getEventCategories() {
    const response = await fetch('https://63pythonreact.pythonanywhere.com/api/v1/events/event_categories/');
    return await response.json();
}