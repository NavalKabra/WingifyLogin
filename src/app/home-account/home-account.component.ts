import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent {
  
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

}
