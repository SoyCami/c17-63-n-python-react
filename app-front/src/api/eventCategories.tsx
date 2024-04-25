export async function getEventCategories() {
    const response = await fetch('/api/v1/events/event_categories/');
    const data = await response.json();
    return data;
}