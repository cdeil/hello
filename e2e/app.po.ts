export class HelloPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-app h1')).getText();
  }
}
