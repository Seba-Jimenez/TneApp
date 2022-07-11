import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalHPage } from '../modal-h/modal-h.page';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({ 
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: -33.559,
          lng: -70.59
        },
        zoom: 13,
      },
    });
     await this.addMarkers();
    this.addMarkers();
  }
  
  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: -33.56115415864749,
          lng: -70.5852265925536,
        },
        title: 'Metro estación los quillayes',
        snippet: 'Metro linea 4',
      },
      {
        coordinate: {
          lat: -33.54584345999771,
          lng: -70.58769159130456,
        },
        title: 'Metro estación trinidad',
        snippet: 'Metro linea 4',
      },
      {
        coordinate: {
          lat: -33.54649897785946,
          lng: -70.61287190920379,
        },
        title: 'Paradero PE200 / Autobus 225',
        snippet: 'Autobus 225',
      },
      {
        coordinate: {
          lat: -33.56341101120077,
          lng: -70.61026591408901,
        },
        title: 'Paradero PG277 / Autobus E11',
        snippet: 'Autobus E11',
      },
    ];

    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker) => {
      const modal = await this.modalCtrl.create({
        component: ModalHPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });
  }

}
