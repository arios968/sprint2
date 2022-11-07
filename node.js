








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
    
})




