import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPanelHeadingText() {
    return element(by.css('app-root div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.col-lg-12 ' +
      'app-search-users div.mat-typography div.container div.md-panel div.md-panel-header ' +
      'span.md-panel-header-text.mat-subheading-1')).getText();
  }
}
