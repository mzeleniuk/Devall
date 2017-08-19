import { AppPage } from './app.po';

describe('Devall App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display panel heading text', () => {
    page.navigateTo();
    expect(page.getPanelHeadingText()).toEqual('Find developers in your city');
  });
});
