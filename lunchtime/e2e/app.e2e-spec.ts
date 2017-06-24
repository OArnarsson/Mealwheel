import { LunchtimePage } from './app.po';

describe('lunchtime App', () => {
  let page: LunchtimePage;

  beforeEach(() => {
    page = new LunchtimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
