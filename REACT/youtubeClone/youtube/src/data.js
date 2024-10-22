export const API_KEY ="AIzaSyA-e9vtL5gv4_QGeaomQUExU8LrDJkN5I4"
export const valueConverter = (value)=> {
    if(value>=1000000) {
        return Math.floor(value/1000000) +"M";
    }
    else if(value>=1000) {
        return Math.floor(value/1000)+"K";
    } else {
        return value;
    }
}