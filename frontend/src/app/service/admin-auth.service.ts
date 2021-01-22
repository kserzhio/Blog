import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(
    private httpClient: HttpClient,
    private jwtHeplerService: JwtHelperService,
  ) {}
  login(body: { login: string; password: string }) {
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', body)
      .pipe(
        map((res) => ({
          ...res,
          ...this.jwtHeplerService.decodeToken(res.accessToken)
        }))
      );
  }
}
