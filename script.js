
const respuestas = {
    segundamas: "español",
    cine: "oviedo",
    canton: "cartagena",
    novela: "sanfermin",
    vasco: "zarauz",
    wifi: "zamora",
    frontera: "raya",
    playa: "asturias",
    masalta: "albacete",
    pico: "mulhacen",
}
//document.querySelector('fieldset').addEventListener('click', moverse una pantalla )
/*  Forma antigua creada para hacer scroll unicos para cada preg
const one = document.querySelector('fieldset:nth-child(1)');
const two = document.querySelector('fieldset:nth-child(2)');
const three = document.querySelector('fieldset:nth-child(3)');
const four = document.querySelector('fieldset:nth-child(4)');
const five = document.querySelector('fieldset:nth-child(5)');
const six = document.querySelector('fieldset:nth-child(6)');
const seven = document.querySelector('fieldset:nth-child(7)');
const eight = document.querySelector('fieldset:nth-child(8)');
const nine = document.querySelector('fieldset:nth-child(9)');
const ten = document.querySelector('fieldset:nth-child(10)');
*/

// Funcion de scroll general
let questionScroll = document.querySelectorAll('fieldset');
for(let i = 0; i < questionScroll.length; i++){
    questionScroll[i].addEventListener('click', () => {
            questionScroll[i + 1].scrollIntoView({ behavior: 'smooth',})
    });
}


//funcion de scroll especifica para cada preg
/*
one.addEventListener('click', scroll);

function scroll(e){
    two.scrollIntoView({ behavior: "smooth"});
}

two.addEventListener('click', scroll2);
function scroll2(e){
    three.scrollIntoView({ behavior: "smooth"})
}
*/
document.querySelector('form[name="formquiz"]').addEventListener('submit', (event) => {
    event.preventDefault()
    
    let rightAnswers = 0   
    let primeraPreg = event.target.elements.segundamas.value;
    let segundaPreg = event.target.elements.cine.value;
    let terceraPreg = event.target.elements.canton.value;
    let cuartaPreg = event.target.elements.novela.value;
    let quintaPreg = event.target.elements.vasco.value;
    let sextaPreg = event.target.elements.wifi.value;
    let septimaPreg = event.target.elements.frontera.value;
    let octavaPreg = event.target.elements.playa.value;
    let novenaPreg = event.target.elements.masalta.value;
    let decimaPreg = event.target.elements.pico.value;

    primeraPreg == respuestas.segundamas ? (rightAnswers++, console.log("Respuesta 1 correcta")) : console.log("Respuesta 1 erronea");
    segundaPreg == respuestas.cine ? (rightAnswers++, console.log("Respuesta 2 correcta")) : console.log("Respuesta 2 erronea");
    terceraPreg == respuestas.canton ? (rightAnswers++, console.log("Respuesta 3 correcta")) : console.log("Respuesta 3 erronea");
    cuartaPreg == respuestas.novela ? (rightAnswers++, console.log("Respuesta 4 correcta")) : console.log("Respuesta 4 erronea");
    quintaPreg == respuestas.vasco ? (rightAnswers++, console.log("Respuesta 5 correcta")) : console.log("Respuesta 5 erronea");
    sextaPreg == respuestas.wifi ? (rightAnswers++, console.log("Respuesta 6 correcta")) : console.log("Respuesta 6 erronea");
    septimaPreg == respuestas.frontera ? (rightAnswers++, console.log("Respuesta 7 correcta")) : console.log("Respuesta 7 erronea");
    octavaPreg == respuestas.playa ? (rightAnswers++, console.log("Respuesta 8 correcta")) : console.log("Respuesta 8 erronea");
    novenaPreg == respuestas.masalta ? (rightAnswers++, console.log("Respuesta 9 correcta")) : console.log("Respuesta 9 erronea");
    decimaPreg == respuestas.pico ? (rightAnswers++, console.log("Respuesta 10 correcta")) : console.log("Respuesta 10 erronea");

    console.log(rightAnswers);
    

    // Para mandar el form a ...
    //event.target.submit();
})



    /*  VERSION EN MENTE Array + condiciones de if anidados

    let miForm = [event.target.elements.segundamas.value,
        event.target.elements.cine.value,
        event.target.elements.canton.value,
        event.target.elements.novela.value,
        event.target.elements.vasco.value,
        event.target.elements.wifi.value,
        event.target.elements.frontera.value,
        event.target.elements.playa.value,
        event.target.elements.masalta.value,
        event.target.elements.pico.value]
    
    const btn = document.getElementsByClass(input[type="radio"])
        
    for(let i=0; i<miForm.length;i++){
        if(miForm[i]== 0){
            console.log('Rellena la opcion');
                
        }else{ 
            (miForm[i] == respuestas.value) ? btn.style.backgroundColor = "green":btn.style.backgroundColor = "red"   
        }    
    }
    */
   
   //console.log('Primera respuesta: ', event.target.elements.segundamas.value)
   //console.log(miForm.length)
