import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import 'rxjs/add/operator/map';
 
@Injectable()
export class PersonService {
  private baseUrl: string = 'http://localhost:8010';
 
  constructor(private http: Http) {
  }
 
  get(id: number): Observable<Person> {
    let person$ = this.http.get(`${this.baseUrl}/persons/${id}`, {headers: this.getHeaders()}).map(mapPerson);
    return person$;
  }
 
  getAll(): Observable<Person[]> {
     let person$ = this.http.get(`${this.baseUrl}/persons`, {headers: this.getHeaders()}).map(mapPersons);
    return person$;
  }
 
  save(person: Person): Observable<Response> {
    console.log('Saving person ' + JSON.stringify(person));
    return this.http.put(`${this.baseUrl}/persons/${person.id}`, person);
  }
 
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
 
function mapPersons(response: Response): Person[] {
  return response.json().map(toPerson);
}
 
function mapPerson(response: Response): Person {
  return toPerson(response.json());
}
 
function toPerson(r: any): Person {
  return r;
}