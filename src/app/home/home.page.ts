import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,public navCtrl: NavController , public loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  pagarQR(){
    this.cargarQR();
    setTimeout(() => {
      this.loadingCtrl.dismiss();
      this.router.navigate(['/pago-qr']);
    }, 2000);
  }

  verHistotial() {    
    this.presentLoading();
    setTimeout(() => {
      this.loadingCtrl.dismiss();
      this.router.navigate(['/historial']);
    }, 2000);
  }

  async cargarQR() {
    const loading = await this.loadingCtrl.create({
      message: 'Generando codigo QR...',
      spinner: "lines"
    });
    await loading.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando tus movimientos...',
      spinner: "lines"
    });
    await loading.present();
  }
}
