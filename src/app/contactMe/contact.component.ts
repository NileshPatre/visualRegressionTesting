import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  public name:string;
  public phoneNo:string;
  public email:string;
  ngOnInit() {
    this.name="Nilesh Patre";
    this.phoneNo="+919970426252";
    this.email="nileshp3636@gmail.com"
  }
  
}
