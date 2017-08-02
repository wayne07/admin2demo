import { AdminDemoPage } from './app.po';

describe('admin-demo App', () => {
  let page: AdminDemoPage;

  beforeEach(() => {
    page = new AdminDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
