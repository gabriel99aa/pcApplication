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

class Monitor {

    static contadorMonitor = 0;

    constructor (marca, tamanio){
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitor;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca (marca){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor} ~ marca: ${this._marca} ~ tamanio: ${this._tamanio}]`
    }
}

class Computadora {

    static contadorComputadora = 0;

    constructor (nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclaco(teclado){
        return this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora ${this._idComputadora} : ${this._nombre} ~ \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}



let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());

let teclado1 = new Teclado("wifi", "HP");
console.log(teclado1.toString());

let monitor1 = new Monitor("LG", 29);
console.log(monitor1.toString());

let computador1 = new Computadora("DELL", monitor1, teclado1, raton1);
console.log(computador1.toString());