import { FoodAnglePage } from './app.po';

describe('food-angle App', () => {
  let page: FoodAnglePage;

  beforeEach(() => {
    page = new FoodAnglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
