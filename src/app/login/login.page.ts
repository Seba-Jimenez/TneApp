import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from "@ionic/angular";
import { IngresoPage } from "../ingreso/ingreso.page";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
   public modalCtrl: ModalController, private router: Router ,private faio: FingerprintAIO
  ) { }

  ngOnInit() {
  }

  async ingreso() {
    const modal = await this.modalCtrl.create({
      component: IngresoPage,
      animated: true,
      backdropDismiss: false,
      cssClass: 'ingreso-modal'
    })

    return await modal.present();
  };
  
  public showFingerprintAuthDlg() {

    this.faio.isAvailable().then((result) => {
      console.log(result)

      this.faio.show({
        fallbackButtonTitle: 'Usar Pin',
        description: "Pon tu huella en el lector dactilar",
        title: 'Inicio Sesión',
        subtitle: 'Ingresa a la app con tu huella',
        disableBackup: false,
      })
      .then((result) => {
        alert("Escaneo exitoso")
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error)
        alert("No se encuentra la huella")
      });
    })
    .catch((error: any) => {
      console.log(error)
  });
  } 

}
