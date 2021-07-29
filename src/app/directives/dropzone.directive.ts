import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {
  @Output() onFileDropped = new EventEmitter<any>();

  constructor() { }
  @HostListener('dragover', ['$event'])public onDragOver(dragevt:Event){
    dragevt.preventDefault();
    dragevt.stopPropagation();
   // console.log('Dragover')
  }
  @HostListener('dragleave', ['$event'])public onDragLeave(evt:Event){
    evt.preventDefault();
    evt.stopPropagation();
    console.log('DragLeave')
  }
  
  @HostListener('drop', ['$event']) public onDrop(dropevt:any){
    dropevt.preventDefault();
    dropevt.stopPropagation();
    console.log(dropevt)
    let files = dropevt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files[0])
    }
  }

} 
