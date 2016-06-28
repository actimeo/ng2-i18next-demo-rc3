import { Component } from '@angular/core';
import 'i18next';
import 'i18nextXHRBackend';
import 'i18nextBrowserLanguageDetector';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
