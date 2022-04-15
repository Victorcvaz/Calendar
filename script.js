function displayTime() {
    let allTimes = new Date();
    let hAtual = allTimes.getHours()
    let mAtual = allTimes.getMinutes()
    let sAtual = allTimes.getSeconds()
    let diasemAtual = allTimes.toLocaleDateString('pt-BR', { weekday: 'long' })
    let diaAtual = allTimes.getDate()
    let mesAtual = allTimes.toLocaleDateString('pt-BR', { month: 'long' })
    let anoAtual = allTimes.getFullYear()
    if (hAtual < 10) hAtual = "0" + hAtual;
    if (mAtual < 10) mAtual = "0" + mAtual;
    if (sAtual < 10) sAtual = "0" + sAtual;

    document.querySelector('.clock').innerHTML = `${hAtual}:${mAtual}:${sAtual}`
    document.querySelector(".date").innerHTML = `${diasemAtual}, ${diaAtual} de ${mesAtual} de ${anoAtual}`

    setTimeout(function () {
        displayTime()
    }, 1000)
}

const date = new Date();

const renderCalendar = () => {

    date.setDate(1);


    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(), 
        date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(
        date.getFullYear(), 
        date.getMonth(), 0).getDate();
        
    const firstDayIndex = date.getDay()

   function diasdmes(){
       numAno = date.getFullYear(),
       numMes = date.getMonth()+1,
       numDias = new Date(numAno, numMes, 0).getDate();
       return numDias;
   }
        let solucao = 42 - firstDayIndex - diasdmes()
        
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = date.getFullYear();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i 
        === new Date().getDate() 
        && date.getMonth() 
        === new Date().getMonth() ){
            days += `<div class="today">${i}</div>`;
            
        } else {
            days += `<div>${i}</div>`;
            
        }
    }
    for (let j = 1; j <= solucao; j++) {
        days += `<div class="next-date">${j}</div>`;
    }   
    monthDays.innerHTML = days;
};

document.querySelector("#next").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar()
});

document.querySelector("#prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
});
renderCalendar()
