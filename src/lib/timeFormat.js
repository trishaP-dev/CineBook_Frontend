const timeFormat =(minutes)=>{
    const hours = Math.floor(minutes / 60);
    const minRemainder = minutes % 60;
    return `${hours}h ${minRemainder}m`
}

export default timeFormat