import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userIdSource = new BehaviorSubject<number | null>(null);
  private testIdSource = new BehaviorSubject<number | null>(null);

  currentUserId = this.userIdSource.asObservable();
  currentTestId = this.testIdSource.asObservable();

  setUserId(userId: number) {
    this.userIdSource.next(userId);
  }

  setTestId(testId: number) {
    this.testIdSource.next(testId);
  }
}
