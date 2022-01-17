class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada (tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca (marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada { 

    static contadorRatones = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton (){
        return this._idRaton
    }
    toString(){
        return `Raton: [idRaton: ${this.idRaton} ~ tipoEntrada: ${this.tipoEntrada} ~ marca: ${this.marca}]`
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this.idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado} ~ tipoEntrada: ${this._tipoEntrada} ~ marca: ${this._marca}]`;
    }
}


let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());

let teclado1 = new Teclado("wifi", "HP");
console.log(teclado1.toString());
