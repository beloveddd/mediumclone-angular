import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      if (key) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    } catch (e) {
      console.error('Error saving to localStorage');
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.error('Error getting data from localStorage');
      return null;
    }
  }
}
