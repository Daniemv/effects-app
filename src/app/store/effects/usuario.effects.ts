import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUser, loadUserError, loadUserSuccess } from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import { of } from "rxjs";



@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) { }

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUser),
      switchMap(({id}) =>
        this.usuarioService.getUserById(id).pipe(
          map(user => loadUserSuccess({ usuario: user })),
          catchError(error => of(loadUserError({ payload: error })))
        ))
    );
  });
}
