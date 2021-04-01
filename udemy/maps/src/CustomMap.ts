import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private map: google.maps.Map;
  constructor(public id: string) {
    this.map = new google.maps.Map(document.getElementById(id), {
      clickableIcons: true,
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.map,
      position: {
          lat: user.location.lat,
          lng: user.location.lng
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
}
