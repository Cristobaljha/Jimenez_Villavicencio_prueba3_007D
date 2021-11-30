import {browser, element, by } from 'protractor';

describe('Testeo 1', () => {
  

  beforeEach(() => {
    browser.get("/");
  });

  

  it("Se muestra todo correctamente en el primer test", () => {
    expect(element(by.css(".texto ion-card-title")).getText()).toContain("Sobre nosotros");
  });


  

});
