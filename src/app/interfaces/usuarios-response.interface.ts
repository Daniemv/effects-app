import { Usuario } from "../models/usuario.model";

export interface UsuariosResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Usuario[];
}
