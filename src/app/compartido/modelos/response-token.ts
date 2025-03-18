import { Usuario } from "./usuario";

export interface ResponseToken {
  token: string;
  usuario: Usuario;
}
