import { Ng2I18nextDemoRc3Page } from './app.po';

describe('ng2-i18next-demo-rc3 App', function() {
  let page: Ng2I18nextDemoRc3Page;

  beforeEach(() => {
    page = new Ng2I18nextDemoRc3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
