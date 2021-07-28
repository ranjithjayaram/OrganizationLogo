import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'orgimage',
  templateUrl: './orgimage.component.html',
  styleUrls: ['./orgimage.component.scss']
})


export class OrgimageComponent implements OnInit {
  public orgImage:any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  openModal(content:any){
    this.modalService.open(content, { centered: true });
  }
  getFinalImage(img:any){
    this.orgImage= img;
   this.modalService.dismissAll();
  }
}
