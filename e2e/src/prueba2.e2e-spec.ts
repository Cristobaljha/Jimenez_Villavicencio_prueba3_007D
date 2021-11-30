/*import { AppPage } from './app.po';*/
import {browser, element, by } from 'protractor';

describe('Testeo 2', () => {
  

  beforeEach(() => {
    browser.get("/");
  });

  

 
  it("Se muestra todo correctamente en el segundo test", () => {
    expect(element(by.css(".nombre ion-label")).getText()).toContain("Nombres");
  });

  

});
