import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";

export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
    this.isAuth = !(localStorage.getItem('token') == null);
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async setToken(token: string) {
    this.isAuth = true;
    localStorage.setItem('token', token)
  }
}