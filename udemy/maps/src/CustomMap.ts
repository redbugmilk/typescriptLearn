export class CustomMap {
    map: google.maps.Map;
    constructor(){
        this.map = new google.maps.Map(document.getElementById("map"), {
            clickableIcons: true,
            zoom:1,
            center: { lat:0, lng:0 }
        });
        
    }
}