import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  otp:string = "";

  constructor(private router: Router,public navCtrl: NavController , public loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.setIpFocus();
  }


  setIpFocus() {
    for (let i = 1; i <= 4; i++){
      if ((this.otp.length + 1) == i){
        document.getElementById("ip" + i).style.background = "var(--ion-color-dark)";
      }
      else {
        document.getElementById("ip" + i).style.background = "var(--ion-color-light)";
      }
    }
  }

  clear() {
    this.otp = "";
    this.setIpFocus();
  }

  back() {
    this.otp = this.otp.slice(0, -1);
    this.setIpFocus();
  }

  set(number){
    this.otp += number;
    this.setIpFocus();

    if (this.otp.length == 4) {
      this.presentLoading();
      this.checkOTP();
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Verificando clave...',
      spinner: "circular"
    });
    await loading.present();
  }

  async presentToast(message,color) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: color,
      duration: 1000,
      position: "top",
    });
    toast.present();
  }

  checkOTP(){
    setTimeout(() => {
      this.loadingCtrl.dismiss();

      if (this.otp == "1234") {
        this.presentToast("Clave Correcta", "success");        
        this.router.navigate(['/home']);
      }
      else {
        this.presentToast("Clave incorrecta", "danger");
        this.clear();
      }
    }, 2000);
  }
}
