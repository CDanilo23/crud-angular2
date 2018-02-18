import { SWAngularPage } from './app.po';

describe('swangular App', () => {
  let page: SWAngularPage;

  beforeEach(() => {
    page = new SWAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
