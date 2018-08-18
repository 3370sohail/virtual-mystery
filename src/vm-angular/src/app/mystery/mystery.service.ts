import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class MysteryService {
  API_URL = 'http://localhost:8000';

  constructor(private httpClient: HttpService) { }
  
  listRelease() {
	  // sends a request and recieves a list of releases
	  return this.httpClient.get(`${this.API_URL}/mystery/release/list`);
  }
  
  /* gets release number from currentUser objects */
  getRelease() {
	  return JSON.parse(sessionStorage.getItem('currentUser'))['release'];
  }
  
  /* sets release attribute in currentUser object iff newRelease > currentUser's release */
  setRelease(newRelease: number) {
	  var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
	  if (newRelease > currentUser['release']) {
		currentUser['release'] = newRelease;
		sessionStorage.setItem('currentUser', currentUser);
	  }
  }
  
}
