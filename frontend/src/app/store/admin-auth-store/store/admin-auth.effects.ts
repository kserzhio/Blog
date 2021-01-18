import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AdminAuthService } from 'src/app/service/admin-auth.service';
import { login, loginFailed, loginSuccess } from './admin-auth.actions';

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.adminAuthService
          .login({
            login: action.login,
            password: action.password,
          })
          .pipe(
            map((loginSuccessData) => loginSuccess(loginSuccessData)),
            catchError((error) =>
              of(
                loginFailed({
                  serverError: error.message,
                })
              )
            )
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private adminAuthService: AdminAuthService
  ) {}
}
