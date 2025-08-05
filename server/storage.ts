import { type ContactForm } from "@shared/schema";

export interface IStorage {
  // Contact form doesn't need persistent storage, just email sending
  // This interface can be extended if needed for future features
}

export class MemStorage implements IStorage {
  constructor() {
    // No persistent storage needed for contact form
  }
}

export const storage = new MemStorage();
