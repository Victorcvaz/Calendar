function displayTime() {
    let allTimes = new Date();
    let hAtual = allTimes.getHours()
    let mAtual = allTimes.getMinutes()
    let sAtual = allTimes.getSeconds()
    let diasemAtual = allTimes.toLocaleDateString('pt-BR', {weekday: 'long'})
    let diaAtual = allTimes.getDate()
    let mesAtual = allTimes.toLocaleDateString('pt-BR', {month: 'long'})
    let anoAtual = allTimes.getFullYear()
    if (mAtual < 10) {
         mAtual = "0" + mAtual;
    }if (sAtual < 10) {
         sAtual = "0" + sAtual;   
    }

        document.querySelector('.clock').innerHTML = `${hAtual}:${mAtual}:${sAtual}`
        document.querySelector(".date").innerHTML = `${diasemAtual}, ${diaAtual} de ${mesAtual} de ${anoAtual}`

    setTimeout(function () {
        displayTime()
    }, 1000)
}



