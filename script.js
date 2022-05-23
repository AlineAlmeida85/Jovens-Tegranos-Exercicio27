function verificar(str) {    

    let palavra = document.getElementById("inputPalavra").value;
    palavra = palavra.toLowerCase();
    let msg = "";
    let palindromo = "";

    
    for(var i = palavra.length - 1; i >= 0; i--) {
       palindromo += palavra[i]
    } if (palavra == palindromo) {
        msg = "É palíndroma";       
    } else {
        msg = "Não é palíndroma";
    }

    saida.innerHTML = msg;
}