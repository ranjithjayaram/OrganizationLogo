import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {
  imageChangedEvent: any;
  croppedImage: any;
  @Output() finalImage: EventEmitter<number> =   new EventEmitter();
  constructor() { }
  public orgImageurl: any;
  public showDropzone: boolean = true;
  ngOnInit(): void {
  }
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    this.imageChangedEvent = event
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (event: any) => {
        this.orgImageurl = event.target.result;
        this.showDropzone = false;
      }
      reader.onerror = (event: any) => {
        alert('Error')
      }
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  saveCroppedImage() {
    this.finalImage.emit(this.croppedImage)
  }
}
