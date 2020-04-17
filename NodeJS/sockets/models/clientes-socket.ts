import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { IUser } from '../../classes/interfaces/user.interface';

export class ClientesSocketController {

    // Emitir inserción de cliente
    newClient = (io: socketIO.Server) => {
        let payload = {
            ok: true,
        }
        io.emit("newClient", payload);
    };

    hola() {

    }
}