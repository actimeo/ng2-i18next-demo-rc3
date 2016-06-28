import { provide, Component } from '@angular/core';

import 'i18next';
import 'i18nextXHRBackend';
import 'i18nextBrowserLanguageDetector';
import { I18nService, I18nServiceConfig, I18nDirective } from 'ng2-i18next/ng2-i18next';

declare var i18nextBrowserLanguageDetector: any;
declare var i18nextXHRBackend: any;

const NG2_I18NEXT_PROVIDERS = [provide(I18nServiceConfig, {
  useValue: {
    use: [i18nextBrowserLanguageDetector, i18nextXHRBackend],
    config: {
      detection: { order: ['navigator'] },
      fallbackLng: 'en'
    }
  }
}),
  I18nService];

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [NG2_I18NEXT_PROVIDERS],
  directives: [I18nDirective]
})
export class AppComponent {
  localizedText: string = 'Press to load localized text';

  constructor(private i18n: I18nService) { }

  onclick() {
    this.localizedText = this.i18n.t('hello-world');
  }
}
