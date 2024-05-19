export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

// Helper function to pad zero to single digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, '0');
}