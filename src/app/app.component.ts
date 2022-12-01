import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  showErrors = false;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.pattern(/(\(\d{3})\)\s(\d{3})\-(\d{4})/), Validators.required]),
      companyName: new FormControl('', Validators.required),
      businessType: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.showErrors = true;
    if(!this.form.valid) {
      return;
    }
    alert(`Name: ${form.value.name}\nEmail: ${form.value.email}\nPhone Number: ${form.value.phoneNumber}\nCompany Name: ${form.value.companyName}\nType of Business: ${form.value.businessType}\n`)
    this.showErrors = false;
  }
}
