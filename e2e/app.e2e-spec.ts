import { Angular2MosaicPage } from './app.po';

describe('angular2-mosaic App', () => {
  let page: Angular2MosaicPage;

  beforeEach(() => {
    page = new Angular2MosaicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
