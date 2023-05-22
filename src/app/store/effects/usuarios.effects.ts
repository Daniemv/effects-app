import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, loadUsersError, loadUsersSuccess } from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import { of } from "rxjs";



@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) { }

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usuarioService.getUsers().pipe(
          map(users => loadUsersSuccess({ usuarios: users })),
          catchError(error => of(loadUsersError({ payload: error })))
        ))
    );
  });
}
