export const dateFormat = (date) =>{
    return new Date(date).toLocaleString('en-US',{
        weekday:'short',//abbreviated day name — 'Mon', 'Tue', 'Wed' etc. Use 'long' for full names like 'Monday'.
        month:'long',//full month name — 'January', 'June' etc. Use 'short' for 'Jan', 'Jun'.
        day:'numeric',//day number — 1, 15, 30 etc.
        hour:'numeric',//time — 8:00 AM, 11:45 PM etc. The AM/PM format comes from the 'en-US' locale.
        minute:'numeric'
    })
}
//new Date(date) Converts the input (e.g. "2025-06-30T02:30:00.000Z") into a JavaScript Date object so it can be formatted.
//.toLocaleString('en-US', { ... }) Formats the date into a human-readable string based on the locale. 'en-US' means English (United States), which gives you formats like AM/PM, month names in English, etc.

