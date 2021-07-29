import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'orgimage',
  templateUrl: './orgimage.component.html',
  styleUrls: ['./orgimage.component.scss']
})


export class OrgimageComponent implements OnInit {
  public orgImage: any;
  public orgImageName: string='';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
  getFinalImage(img: any) {
    this.orgImage = img[0];
    this.orgImageName= img[1];
  }
  get closeModalFn() {
    return this.closeModal.bind(this);
}

  closeModal() {
    this.modalService.dismissAll();
  }
}
