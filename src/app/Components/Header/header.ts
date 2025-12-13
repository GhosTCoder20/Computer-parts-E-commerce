import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.html',
  styles:`
   header{
    position: fixed;
    right:0;
    left:0;
    top:0;
   }
  `
})
export class Header {
  showMegaMenu=false;
  toggleMegaMenu(){
    this.showMegaMenu=!this.showMegaMenu;
  }
}
