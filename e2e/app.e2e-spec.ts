import { MeanRvspPage } from './app.po';

describe('mean-rvsp App', function() {
  let page: MeanRvspPage;

  beforeEach(() => {
    page = new MeanRvspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
