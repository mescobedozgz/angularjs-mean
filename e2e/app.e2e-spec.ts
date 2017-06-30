import { MeanRvspPage } from './app.po';

describe('mean-rvsp App', () => {
  let page: MeanRvspPage;

  beforeEach(() => {
    page = new MeanRvspPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
