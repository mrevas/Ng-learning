import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  num = 7;
  rabbis: { name: string; location: string; }[];
  constructor(service: GetDataService) { 
    this.rabbis = service.getRabbis();
    
  }

  ngOnInit(): void {}
  printTitle(): string {
    return `woooow this actually works!! and it worked ${this.num} times broo`;
  }

}
