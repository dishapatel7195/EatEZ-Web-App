import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { MenuService } from 'src/app/services/menu.service'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor(private menu : MenuService) { }

  sendMsg(menu) {
    this.subject.next(menu) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
