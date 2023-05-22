import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public userCollection: Usuario[] = [];
  public loading = false;
  public error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ usuarioCollection, loading, error }) => {
      this.userCollection = usuarioCollection;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUsers());
  }
}
