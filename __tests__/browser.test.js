import nightmare from 'nightmare';
import regeneratorRuntime from "regenerator-runtime";
import { APP_ROOT } from 'constants/app';

describe('Browser tests', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  it('Home page', async () => {
    let page = nightmare().goto(APP_ROOT);
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain("React blog");
  });

  it('Contacts page', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click(`a[href="/contacts"]`);

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Обратная связь');
  });

  it('Create-post page', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click(`a[href="/create-post"]`);

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Post Create');
  });
});