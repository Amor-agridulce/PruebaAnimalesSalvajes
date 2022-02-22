class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }

    get nombre() {
        return this._nombre
    }

    set nombre(value) {
        this.nombre = value
    }

    get edad() {
        return this._edad
    }

    set edad(value) {
        this._edad = value
    }

    get img() {
        return this._img
    }

    set img(value){
        this._img = value
    }

    get comentarios (){
        return this._comentarios
    }

    set comentarios (value){
        this.comentarios = value
    }

    get sonido(){
        return this._sonido
    }

    set sonido(value){
        this._sonido = value
    }
}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir(){}
}
class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar(){}
}
class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Grunir(){}
}
class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){}
}
class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar(){}
}

export{Leon, Lobo, Oso, Serpiente, Aguila}