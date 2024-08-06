import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nameValue: string = '';
  ageValue: string = '';
  mailValue: string = '';
  passValue: string = '';

  isFormValid():boolean{
    if(this.ageValue && this.mailValue && this.nameValue && this.passValue){
      return true;
    }
    else{
      return false ;
    }
  }
}
