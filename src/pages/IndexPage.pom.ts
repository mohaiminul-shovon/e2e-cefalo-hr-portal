import { Page, test, expect } from "@playwright/test";
export class IndexPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
