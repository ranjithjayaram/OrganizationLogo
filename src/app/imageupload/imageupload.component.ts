import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {
  public croppedImage: any;
  public filename: string='';
  public orgImageurl: any;
  public showDropzone: boolean = true;
  @Output() finalImage: EventEmitter<any> =   new EventEmitter();
  @Input() closeModal:any;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.convertSelectedFile(file)
    }
  }
  convertSelectedFile(file:File){
    this.filename= file.name;
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
  droppedFile(file:File){
    this.convertSelectedFile(file)
    this.showDropzone = false;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  saveCroppedImage() {
    this.finalImage.emit([this.croppedImage,this.filename])
    this.closeModal()
  }
}
