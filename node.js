
const nodos = document.querySelectorAll(".contenedor-texto");
const form = document.querySelector(".datos");

let pepito = [];

const datos = {
  firstName: {
    value: "",
    name: "Nombre",
  },
  lastName: {
    value: "",
    name: "Apellido",
  },
  email: {
    value: "",
    name: "Correo",
  },
  password: {
    value: "",
    name: "Contraseña",
  },
};

nodos.forEach((Input) => {
  Input.addEventListener("keyup", (e) => {
    datos[e.target.name].value = e.target.value.trim();
  });
});

form.addEventListener("click", (e) => {
  e.preventDefault();
  let hasErrors = false;

  for (const nodos in datos) {
    const errorEl = document.getElementById(`error-${nodos}`);
    errorEl.innerText = "";

    if (datos[nodos].value === "") {
      errorEl.innerText = `${datos[nodos].name} no puede estar vacío`;
      hasErrors = true;
    }
    if (nodos === "email") {
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (regex.test(datos[nodos].value) === false) {
        errorEl.innerText = "Parece que  no es un correo electronico ";
        hasErrors = true;
      }
    }
  }

  if (hasErrors === false) {
    pepito.push(datos);
    localStorage.setItem("data", JSON.stringify(pepito));
    console.log(pepito);
  }
});




/*
const alertas = document.querySelectorAll(".cuadros")
const boton= document.querySelector(".boton")
let pepito=JSON.parse(localStorage.getItem("data"))
let arrayform=[]
let formulario={
    nombre:"",
    apellido:"",
    email:"",
    contraseña:"",
    
}
alertas.forEach(Input=>{


    Input.addEventListener("keyup",e=>{
               
        if (e.target.name ==="firstName") {
            formulario.nombre=e.target.value
            
        }else if (e.target.name==="lastName") {
            formulario.apellido=e.target.value
        }else if (e.target.name==="eMail") {
            formulario.email=e.target.value
        }else {
            formulario.contraseña=e.target.value

        }
    })


})

console.log(pepito);


boton.addEventListener("click", (e)=>{

    e.preventDefault()
    arrayform.push(formulario)
    localStorage.setItem("data",JSON.stringify(arrayform))
    console.log(arrayform);
    
})*/





