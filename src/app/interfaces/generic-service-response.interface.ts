import { Usuario } from "../models/usuario.model";

export interface GenericServiceResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Usuario[];
}
