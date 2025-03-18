import { Authority } from "./authority";
import { Rol } from "./rol";

export interface Usuario {
  id: number;
  usuario: string;
  personaId: number;
  authorities: Array<Authority>;
  roles?: Array<Rol>;
}
