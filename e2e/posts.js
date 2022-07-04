describe('Given an app which collect all the healthy food of Tezonapa', () => {
  describe('When an user wants to find a healthier food', () => {
    it('Then a list of healthy food should be shown', () => {
      await device.reloadReactNative();
      await element(by.id('post')).toBeVisible()
    });
  });

  describe('When a user selects a healthy to see more information', () => {
    it('Then more information should be shown in the screen', () => {
      await device.reloadReactNative();
      await element(by.id('more-info')).tap();
      await element(by.id('post-details')).toBeVisible();
    });
  });
});