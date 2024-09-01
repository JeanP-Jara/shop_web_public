import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -12.0262542,
    lng: -77.1525887
  };

  zoom = 11;

  markerPosition = {
    lat: 0,
    lng: 0
  }

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email requerido';
    }

    return this.email.hasError('email') ? 'Email no valido' : '';
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
