import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  name: string = '';  
  email: string = '';
  password: string = '';
  apiUrl: string = 'https://672b82731600dda5a9f5524c.mockapi.io/signin';

  @Input() signinStatus!: string;
  @Input() loginStatus!: boolean;
  @Output() status = new EventEmitter<string>();
  @Output() lstatus = new EventEmitter<boolean>();

  onSignIn() {
    const user: User = { email: this.email, password: this.password, name: this.name };

    this.http.post(this.apiUrl, user).pipe(
      tap(response => {
        console.log('User signed in successfully', response);
        this.loginStatus = true;
        this.status.emit('hidden');
        this.lstatus.emit(true);
        localStorage.setItem('user', JSON.stringify({ name: this.name, email: this.email }));

        this.route.queryParams.subscribe(params => {
          const redirectTo = params['redirectTo'];
          if (redirectTo === 'cart') {
           
            this.router.navigate(['/cart']);
          } else {
       
            this.router.navigate(['/']);
          }
        });
      }),
      catchError(error => {
        console.error('Sign-in failed', error);
        this.loginStatus = false;
        this.lstatus.emit(false);
        localStorage.removeItem('user');
        return of({ success: false, message: 'Sign-in failed' });
      })
    ).subscribe();
  }

  onClose() {
    this.status.emit('hidden');
  }
}
