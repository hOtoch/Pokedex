import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  private eventSubject = new Subject<any>();

  emitEvent(data: any) {
    this.eventSubject.next(data);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
