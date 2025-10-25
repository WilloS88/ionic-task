import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    CommonModule,
  ],
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {}
  
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
