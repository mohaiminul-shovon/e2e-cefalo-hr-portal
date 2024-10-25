import { Page } from "@playwright/test";
const { IndexPage } = require("./IndexPage.pom");
export class POManager {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
