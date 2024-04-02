import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {registerFormConfig} from "./constants/register-form.config";
import {IForm} from "./models/form.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-forms-json';
  readonly registerForm: IForm = registerFormConfig;
}
