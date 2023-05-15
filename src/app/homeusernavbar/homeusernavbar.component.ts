import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-homeusernavbar',
  templateUrl: './homeusernavbar.component.html',
  styleUrls: ['./homeusernavbar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeusernavbarComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        $(".menu .aa").each(() => {
          if ($(this).attr("routerLink") === url) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
      }
    });
  }

}
