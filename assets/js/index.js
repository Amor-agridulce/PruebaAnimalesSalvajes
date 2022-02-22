import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/animal.js"

let animalesObjeto = {}
let animalesArrayCards = [];

(async () => {
    try{
        const res = await fetch("animales.json")
        const {animales} = await res.json()
        animales.forEach(item => {
            animalesObjeto[item.name] = item
        });
    } catch (error){
        console.log(error)
    }
})();

const formulario = document.getElementById("formulario");
const animales = document.getElementById("animales");
const animal = document.getElementById("animal")
const edad = document.getElementById("edad")
const comentarios = document.getElementById("comentarios")
const preview = document.getElementById("preview")

animal.addEventListener("change", e => {
    preview.innerHTML = `
    <img src="assets/imgs/${animalesObjeto[e.target.value].imagen}" alt="" class="img-fluid">`;
})

const pintarAnimales = () => {
    animales.innerHTML = "";
    animalesArrayCards.forEach((item) => {
        animales.innerHTML += `
        <article class="card card-animal m-2">
            <img src="assets/imgs/${item.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
                <p>${item.edad}</p>
                <p>${item.comentarios}</p>
            </div>
        </article>
        `;
    });
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if(animal.value === "Leon"){
        const leon = new Leon(
            animal.value,
            edad.value,
            animalesObjeto[animal.value].imagen,
            comentarios.value
        )
        animalesArrayCards.push(leon)
    }

    if(animal.value === "Lobo"){
        const lobo = new Lobo (
            animal.value,
            edad.value,
            animalesObjeto[animal.value].imagen,
            comentarios.value
        )
        animalesArrayCards.push(lobo)
    }

    if(animal.value === "Oso"){
        const oso = new Oso(
            animal.value,
            edad.value,
            animalesObjeto[animal.value].imagen,
            comentarios.value
        )
        animalesArrayCards.push(oso)
    }

    if(animal.value === "Serpiente"){
        const serpiente = new Serpiente(
            animal.value,
            edad.value,
            animalesObjeto[animal.value].imagen,
            comentarios.value
        )
        animalesArrayCards.push(serpiente)
    }

    if(animal.value === "Aguila"){
        const aguila = new Aguila(
            animal.value,
            edad.value,
            animalesObjeto[animal.value].imagen,
            comentarios.value
        )
        animalesArrayCards.push(aguila)
    }

    pintarAnimales()     
});

