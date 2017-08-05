import { TimePage } from './app.po';

describe('time App', () => {
  let page: TimePage;

  beforeEach(() => {
    page = new TimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
