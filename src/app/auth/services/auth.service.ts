import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface) {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';

    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }
}
