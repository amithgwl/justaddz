import { Component, OnInit, AfterViewInit } from '@angular/core';
 declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
    ngAfterViewInit() {
      $( document ).ready(function() {
       //$("#wrapper").toggleClass("toggled");
       $("#wrapper").addClass("toggled");
       //$("#page-content-wrapper").css("padding","0px");
      });
    } 
  constructor() { }

  cardData = [
    {
      "cardName": "Hotels",
      "routeLink": "/list/hotel",
      "iconClass": "fa fa-h-square",
      "imageUrl": "../../assets/images/IMG-20170201-WA0030.jpg"
    },
    {
      "cardName": "Cinima",
      "routeLink": "/list/cinima",
      "iconClass": "fa fa-film",
      "imageUrl": "../../assets/images/IMG-20170201-WA0030.jpg"
    },
    {
      "cardName": "flower shops",
      "routeLink": "/list/flower",
      "iconClass": "fa fa-gift",
      "imageUrl": "../../assets/images/IMG-20170201-WA0030.jpg"
    },
    {
      "cardName": "doctors",
      "routeLink": "/list/doctor",
      "iconClass": "fa fa-user-md",
      "imageUrl": "../../assets/images/IMG-20170201-WA0030.jpg"
    },
    {
      "cardName": "pharma",
      "routeLink": "/list/pharma",
      "iconClass": "fa fa-plus-square",
      "imageUrl": "../../assets/images/IMG-20170201-WA0030.jpg"
    }];

  ngOnInit() {
  }

}
