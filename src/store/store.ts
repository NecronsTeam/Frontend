import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { jwtDecode } from "jwt-decode";
import { UserRole } from "../types/UserRole";
import { IUser } from "../types/IUser";

export class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
    const token = localStorage.getItem('token')
    this.isAuth = !(token == null);
    this.user = {
      id: '1',
      role: UserRole.Supervisor
    }
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async setToken(token: string) {
    this.isAuth = true;
    localStorage.setItem('token', token);
    this.user = {
      id: '1',
      role: UserRole.Supervisor
    }
  }
}

export const store = new Store();