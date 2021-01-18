import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(private httpClient: HttpClient) {}
  login(body: { login: string; password: string }) {
    return this.httpClient.post<{ accessToken: string }>(
      'http://localhost:3000/auth/login',
      body
    );
  }
}
