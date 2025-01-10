import { ISearchable } from "./ISearchable";

export interface ICompetency {
  name: string,
  id: number,
}

export class Competency implements ISearchable {
  name: string;
  id: number;

  constructor(name: string, id:number) {
    this.name = name;
    this.id = id;
  }

  getName() {
    return this.name
  };
}