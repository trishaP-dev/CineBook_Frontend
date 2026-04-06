
const isoTimeFormat= (dateTime)=> {

    const date = new Date(dateTime);
    const localTime = date.toLocaleTimeString('en-US',{
        hour:'2-digit',
        minute: '2-digit',
        hour12: true,
    });
  return localTime;
}


export default isoTimeFormat
//const date = new Date(dateTime) input-> js obj model
//.toLocaleTimeString('en-US', { ... }) Similar to toLocaleString() but only formats the time part — ignores the date entirely. 'en-US' gives AM/PM format.