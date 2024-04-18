class persona {
    constructor(nombre, apellido, localidad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._localidad = localidad;
    }
    // Metodo GET
    get nombre () {
        return this._nombre;
    }
    get apellido () {
        return this._apellido;
    }
    get localidad () {
        return this.localidad;
    }
    
    // Metodo SET
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido) {
        this._apellido = apellido;
    }
    set localidad (localidad) {
        this._localidad = localidad;
    }


    get total () {
        return `${this._nombre}, ${this._apellido}, ${this._localidad}`;
    }

}
let cliente = new persona ('manuel', 'risco', 'chorrillos');

console.log(cliente); //primero

cliente.nombre = 'roberto'; //cambia el nombre
console.log(cliente);

cliente.apellido = 'tapia'; // se le cambia del anterior el apellido
console.log(cliente);

cliente.localidad = 'lima'; // se le cambia del anterior la localidad
console.log(cliente);

console.log(cliente.total); // se obtiene todos los datos cambiados


