import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {


  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.darkModeSubject.asObservable();

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);
    this.applyDarkMode(!currentMode);
  }

  private applyDarkMode(isDarkMode: boolean) {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}
