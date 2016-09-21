import { Aclib152Page } from './app.po';

describe('aclib152 App', function() {
  let page: Aclib152Page;

  beforeEach(() => {
    page = new Aclib152Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
