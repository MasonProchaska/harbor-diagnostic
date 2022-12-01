import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[phoneNumber]'
})
export class PhoneInputDirective implements OnInit{

  constructor(
      private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }

  transform(value: string) {
    if (!value) return "";
    let trim = value.replace(/\D/g, '').substr(0,10);
    let matched = trim.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    return !matched[2] ? matched[1] : '(' + matched[1] + ') ' + matched[2] + (matched[3] ? '-' + matched[3] : '');
  }

  @HostListener("keyup", ["$event.target.value"])
  change() {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }

}