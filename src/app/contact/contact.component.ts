import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //This coding is to use to scroll into the same page 
  @ViewChild('applynow') applyNowSection!: ElementRef;

  scrollToApply() {
    this.applyNowSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }
  // get() function from contact html file  
  get(){
         
    
  }
  
}
