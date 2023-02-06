console.log("😼")
const txtCol = document.querySelector("#txtCol");
const btnRandomCol = document.querySelector("#btnRandomCol");

const colores = ["text-primary","text-secondary","text-success","text-danger","text-warning","text-info","text-light","text-dark","text-warning","text-info"];

var a = "text-dark"

btnRandomCol.addEventListener("click",(e)=>{
    e.preventDefault();

    console.log("😼")
    console.log("COLOR ANTERIOR: "+a)
    txtCol.classList.remove(a)
    
    let random = Math.random();
    random = random * 9 + 1;
    random = Math.trunc(random);
    console.log(colores[random])
    
    txtCol.classList.add(colores[random])
    a = colores[random];
    console.log("COLOR ACTUAL: "+a)
});

