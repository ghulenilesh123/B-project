import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingalserviceService {

  constructor(private http: HttpClient) {}

  // ✅ Create a signal with default value
  private message = signal<string>('This is default data');

  // ✅ Set new data to signal
  setData(data: string) {
    this.message.set(data);
  }

  // ✅ Get current value of signal (used inside component logic)
  getData(): string {
    return this.message();
  }

  // ✅ Get a reactive computed accessor (used in template)
  get messageSignal() {
    return this.message;
  }


}
