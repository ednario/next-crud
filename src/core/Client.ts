export default class Client {
  // ATRIBUTOS PRIVATES
  #id: string
  #name: string
  #age: number
  // CONSTRUCTOR PARA A DESESTRUTURAÇÃO
  constructor(name: string, age: number, id: string = null) {
    this.#name = name
    this.#age = age
    this.#id = id
  }
// UM OBJETO ESTÁTICO QUE RECEBE UM CLIENT VAZIO
  static empty() {
    return new Client('', 0)
  }
//=== === === === === === === === === === === === === === === === === ===
  get id(){
    return this.#id
  }
  get name(){
    return this.#name
  }
  get age(){
    return this.#age
  }
}