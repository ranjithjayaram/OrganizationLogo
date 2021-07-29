import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrgimageComponent } from './orgimage/orgimage.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DropzoneDirective } from './directives/dropzone.directive';
@NgModule({
  declarations: [
    AppComponent,
    OrgimageComponent,
    ImageuploadComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
