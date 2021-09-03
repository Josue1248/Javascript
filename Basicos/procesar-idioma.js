let btn = document.getElementById("selectLanguage")
btn.addEventListener("click", selectLanguage)

function selectLanguage(){
    if(document.getElementById("ingles").checked){
        alert("Hello, user")
    } else {
        alert("Hola, usuario")
    }
}

function greetingsEnglish(){
    alert("Hello, user")
}

function greetingsSpanish(){
    alert("Hola, usuario")
}