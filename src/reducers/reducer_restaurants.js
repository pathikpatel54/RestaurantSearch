export default function RestaList(state=[], action) {
    switch(action.type){
        case "searchZomato":
            console.log(action.payload.data.restaurants);
            return action.payload.data.restaurants;
        default:
            return [];
    }
}