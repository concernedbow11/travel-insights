import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Replace this with a proper authentication mechanism
  login(username: string, password: string): boolean {
    // For simplicity, accept any non-empty username and password
    return !!username && !!password;
  }
}
