import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router,public navCtrl: NavController , public loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  salir() {    
    this.presentLoading();
    setTimeout(() => {
      this.loadingCtrl.dismiss();
      this.router.navigate(['/login']);
    }, 2000);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando tu cuenta...',
      spinner: "lines-sharp"
    });
    await loading.present();
  }
}
