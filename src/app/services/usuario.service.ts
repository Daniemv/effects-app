import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { Observable, map } from 'rxjs';
import { GenericServiceResponse } from '../interfaces/generic-service-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<GenericServiceResponse>(this.url).pipe(map(res => res.data));
  }
}
