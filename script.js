class persona {
    constructor(nombre, apellido, localidad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._localidad = localidad;
    }

    // Metodo GET
    get nombre () { // cuando esta vacio los parametros, es porque el valor solo se devolvera de un valor que ya se configuro
        return this._nombre;
    }
    get apellido () { 
        return this._apellido;
    }
    get localidad () { 
        return this.localidad;
    }
    
    // Metodo SET
    set nombre (nombre){ // como modifica un valor, se le debe poner un parametro
        this._nombre = nombre;
    }
    set apellido (apellido) {
        this._apellido = apellido;
    }
    set localidad (localidad) {
        this._localidad = localidad;
    }

    // Metodo GET - total

    get total () {
        return `${this._nombre}, ${this._apellido}, ${this._localidad}`;
    }

}
let cliente = new persona ("manuel", "risco", "chorrillos");

console.log(cliente.total); //primero

cliente.nombre = 'roberto'; //cambia el nombre
console.log(cliente.total);

cliente.apellido = 'tapia'; // se le cambia del anterior el apellido
console.log(cliente.total);

cliente.localidad = 'lima'; // se le cambia del anterior la localidad
console.log(cliente.total);

console.log(cliente.total); // se obtiene todos los datos cambiados................................. me sale persona {_nombre: 'manuel', _apellido: 'risco', _localidad: 'chorrillos'}


