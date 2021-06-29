import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Activity } from './types';
@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  // returns specific activity
  getActivity(activityID: string): Observable<Activity> {
    return this._httpClient.get<Activity>(API + "/id/" +
       activityID);
  }
  
  // returns an observable with some data in it
  getAllActivities(): Observable<Activity[]>{
    return this._httpClient.get<Activity[]>(API);
  }
}

const API = "https://orangevalleycaa.org/api/videos"