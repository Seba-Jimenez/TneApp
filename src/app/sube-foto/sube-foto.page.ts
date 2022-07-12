import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sube-foto',
  templateUrl: './sube-foto.page.html',
  styleUrls: ['./sube-foto.page.scss'],
})
export class SubeFotoPage implements OnInit {
  handlerMessage = '';
  imageurl:any;
  securepath: any = window;
  url: any;

  constructor(private actionsheet: ActionSheetController,
    private camera: Camera, private file: File, 
    private imagepicker: ImagePicker, private crop: Crop,
    private domsanitize: DomSanitizer) {}

  ChooseFromCamera(sourceType){
    const options: CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType: this.camera.EncodingType.JPEG,
      sourceType: sourceType,
    };

    this.camera.getPicture(options).then((result) => {
      console.log('Camera URL',result);
      this.imageurl = this.securepath.Ionic.WebView.convertFileSrc(result);
    }, error=>{
      console.log('Error CAMERA', error)
    });
  }

  santizeUrl(imageUrl){
    return this.domsanitize.bypassSecurityTrustUrl(imageUrl);
  }

  pickImagesFromLibrary(){
    const options: ImagePickerOptions = {
      quality: 100,
      maximumImagesCount: 1,
    };
    this.imagepicker.getPictures(options).then((imageresult) => {
      console.log('image Picker Results', imageresult);

      for(let i=0; i<imageresult.length; i++){
        this.url = this.securepath.Ionic.WebView.convertFileSrc(imageresult[i]);
      }
    }, rror =>{
      console.log('Image Picker Error:', rror);
    });
  }

  async selectimageOptions(){
    const actionsheet = await this.actionsheet.create({
      header: 'Elige donde desea subir su foto',
      buttons: [
        {
          text: 'Cargar de la galeria',
          handler: ()=>{
            this.pickImagesFromLibrary()
            this.handlerMessage = 'Imagen subida de la galeria';
          }
        },
        {
          text: 'Subir desde la camara',
          handler: ()=>{
            this.ChooseFromCamera(this.camera.PictureSourceType.CAMERA)
            this.handlerMessage = 'Imagen de la camara subida';
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{ this.handlerMessage = 'Subida abortada';}
        }
      ]
    });
    await actionsheet.present();
  }


  ngOnInit() {
  }

}
