import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name = model('');
  email = model('');
  touchd = false;

  onSubmit() {
    this.touchd = true;
    console.log('Form Submitted!', this.name(), this.email());
  }
  

}
