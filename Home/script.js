function abrir(){
    document.getElementById('wrap-open').style.display = "none"
    document.getElementById('menu-mobile').style.display = "flex"
}

function fechar(){
    document.getElementById('wrap-open').style.display = "flex"
    document.getElementById('menu-mobile').style.display = "none"
}

function irParaContato(){
    window.location.href = "../Contact"
}
   
// const irParaContato = () =>  window.location.href = "../Contact"

function praBaixo(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

// function praBaixo(){
//     window.scrollBy({
//         top: window.innerHeight,
//         behavior: "smooth"
//     })
// }