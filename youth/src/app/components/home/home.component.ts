import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { GalleryService } from 'src/app/gallery.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private galleryService: GalleryService) { }
 
  public onClick(elementId : string) : void { this.viewportScroller.scrollToAnchor(elementId);}

  Items;

  ngOnInit(): void {
    this.galleryService.getImage().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }

}
