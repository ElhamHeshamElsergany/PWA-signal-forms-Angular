import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';
import { FormComponent } from "../components/form/form.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal-forms';
}
