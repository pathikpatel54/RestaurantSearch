import axios from "axios";
let SearchURL;
export function SearchZomato(location, id) {
    SearchURL = `https://developers.zomato.com/api/v2.1/search?lat=${location.latitude}&lon=${location.longitude}&cuisines=${id}&apikey=0d5e7f12d83b2106c5de9c090c567a14&sort=rating`
    var request = axios.get(SearchURL);
    return {
        type: "searchZomato",
        payload: request
    }
}