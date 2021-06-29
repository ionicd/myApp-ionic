import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  // returns specific activity
  getActivity(activityID: string){
    return this._httpClient.get(API + "/id/" +
       activityID);
  }
  
  // returns an observable with some data in it
  getAllActivities(){
    return this._httpClient.get(API);
  }
}

const API = "https://orangevalleycaa.org/api/videos"