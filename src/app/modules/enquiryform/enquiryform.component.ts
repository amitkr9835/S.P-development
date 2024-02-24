import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enquiryform',
  
  templateUrl: './enquiryform.component.html',
  styleUrl: './enquiryform.component.scss'
})
export class EnquiryformComponent {
  constructor(private router: Router  ) { }

  ngOnInit(): void { }

  onClickHomeRedirect(){

    this.router.navigate(['/']);
  }
}
