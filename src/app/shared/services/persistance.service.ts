import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to LocalStorage', e);
    }
  }

  get(key: string): any {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error gating from LocalStorage', e);
      return null;
    }
  }
}
