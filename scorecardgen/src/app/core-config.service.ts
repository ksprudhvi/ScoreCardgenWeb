import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreConfigService {

  constructor() { }

  private readonly baseUrl: string = 'http://127.0.0.1:5001/';

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
