import { User } from "../models/user.model";

export class Security {
    public static set(user: User) {
        const data = JSON.stringify(user);

        localStorage.setItem('listauser', btoa(data));
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('listauser', btoa(data));
    }

    public static getUser(): User {
        const data = localStorage.getItem('listauser');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static clear() {
        localStorage.removeItem('listauser');
    }
}