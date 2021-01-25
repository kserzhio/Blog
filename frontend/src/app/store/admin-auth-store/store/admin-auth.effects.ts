import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of, timer } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  delay,
  delayWhen,
  filter,
  first,
} from 'rxjs/operators';
import { AdminAuthService } from 'src/app/service/admin-auth.service';
import { login, loginFailed, loginSuccess } from './admin-auth.actions';
import { AuthData } from './admin-auth.reducer';
import { isAuth } from './admin-auth.selectors';

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
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData)),
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
  refresh$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      delayWhen((action: AuthData) =>
        timer(action.exp * 1000 - 60 * 1000 - Date.now())
      ),
      switchMap(() =>
        this.store$.pipe(
          select(isAuth),
          first(),
          filter((isAdminAuth) => isAdminAuth)
        )
      ),
      switchMap(() =>
        this.adminAuthService
          .refresh()
          .pipe(
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData))
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private adminAuthService: AdminAuthService,
    private store$: Store
  ) {}
}
