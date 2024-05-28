import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  notify404() {
    console.error('404 error response : Not Found')
  }
  
  notifyUnhandledError() {
    console.error('Unhandled error response')
  }

  notify500() {
    console.error('500 error response')
  }

  notify401() {
    console.error('401 error response')
  }
  
  notify403() {
    console.error('403 error response')
  }

  constructor() { }
}
