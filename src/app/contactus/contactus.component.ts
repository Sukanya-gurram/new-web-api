import { Component, OnInit } from '@angular/core';
import { ImagedataService } from '../imagedata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
imagedata:any[]=[];
  constructor(private img:ImagedataService) { }

  ngOnInit(): void {
    this.img.getImageData().subscribe((result)=>{
      this.imagedata=result['data'];
    })
  }

}
