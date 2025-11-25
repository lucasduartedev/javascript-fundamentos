
export default class Celular {

    private _id: string;
    private _modelo: string;
    private _ligado: boolean = false;

    constructor(
        id: string,
        modelo: string
    ) {
        this._id = id;
        this._modelo = modelo;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }
    
    get modelo(): string {
        return this._modelo;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }
    
    get ligado(): boolean {
        return this._ligado;
    }

    set ligado(modelo: boolean) {
        this._ligado = modelo;
    }

    // * Métodos
    public ligar() {
        this._ligado = true
    }

    public desligar() {
        this._ligado = false
    }

}
