import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public userCollection: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.usuarioService.getUsers().subscribe(users => this.userCollection = users);
  }

}
