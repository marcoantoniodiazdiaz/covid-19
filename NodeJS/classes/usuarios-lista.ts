import { Usuario } from './usuarios';
export class UsuariosLista {
  private lista: Usuario[] = [];

  constructor() {}

  public add(user: Usuario) {
    this.lista.push(user);
    console.log(this.lista);
    return user;
  }

  public updateName(id: string, nombre: string) {
    for (let usuario of this.lista) {
      if (usuario.id === id) {
        usuario.nombre = nombre;
        break;
      }
    }
    console.log('Usuario actualizado');
    console.log(this.lista);
  }

  public getUsers() {
    return this.lista;
  }

  public getUsuario(id: string) {
    return this.lista.find(user => {
      return user.id === id;
    });
  }

  public getSalaUsers(sala: string) {
    return this.lista.filter(user => {
      return user.sala === sala;
    });
  }

  public deleteUser(id: string) {
    const temp = this.getUsuario(id);
    this.lista = this.lista.filter(user => {
      return user.id !== id;
    });

    return temp;
  }
}
