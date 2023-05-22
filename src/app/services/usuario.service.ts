import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { Observable, map } from 'rxjs';
import { UsuariosResponse } from '../interfaces/usuarios-response.interface';
import { UsuarioResponse } from '../interfaces/usuario-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<UsuariosResponse>(`${this.url}?delay=3`).pipe(map(res => res.data));
  }

  public getUserById(id: string): Observable<Usuario> {
    return this.http.get<UsuarioResponse>(`${this.url}${id}`).pipe(map(res => res.data));
  }
}
