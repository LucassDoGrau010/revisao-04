function abrir(){
    document.getElementById('wrap-open').style.display = "none"
    document.getElementById('menu-mobile').style.display = "flex"
}

function fechar(){
    document.getElementById('wrap-open').style.display = "flex"
    document.getElementById('menu-mobile').style.display = "none"
}

function enviar(){
    //pegas os valores digitados pelo usuario
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    // console.log(nome, assunto)
    //montando a string com a variaveis e utilizando crase para isso
    const msg = `Gostaria de entrar em contato!\n\nNome: ${nome}\nAssunto: ${assunto}`
    // console.log(msg)
    const msgTransformada = encodeURIComponent(msg)
    //abre o whats web para mandar a mensagem
    window.open(`https:wa.me/5541999999999?text=${msgTransformada}`)
}