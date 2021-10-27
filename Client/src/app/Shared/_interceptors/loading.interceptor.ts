import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../_services/loading.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  //Loading Service(Spinner)
  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Busy Request(every time API is called) => call Busy() {SHOW Spinner}
    this.loadingService.busy();

    //Call to next middleware 
    //------------------------
    return next.handle(request).pipe(
      //delay of 10sec
      delay(1000),

      //after all requests done -> call Idle() {Hide Spinner}
      finalize(()=>{
        this.loadingService.Idle();
      })
    );
  }
}
