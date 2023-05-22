import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public user: Usuario;
  public loading = false;
  public error: any;


  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ usuario, loading, error }) => {
      this.user = usuario;
      this.loading = loading;
      this.error = error;
    });

    this.activatedRoute.params.subscribe(({id} )=> {
    this.store.dispatch(loadUser({id}));
    });
  }

}
