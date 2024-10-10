import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuScrolled = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.scrollY > 100) { // Use scrollY instead of pageYOffset
      this.isMenuScrolled = true;
    } else {
      this.isMenuScrolled = false;
    }

    console.log(this.isMenuScrolled);
  }
}