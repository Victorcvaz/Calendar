let newTask = document.querySelector("#n-task");
let btnaddtask = document.querySelector("#btnaddtask");
let tasks = document.querySelector(".tasks");
let jEdit = document.querySelector(".janelaEdit");
let jEditfundo = document.querySelector(".janelaEdicaoFundo");
let janelaEditbtnclose = document.querySelector("#janelaEditbtnclose");
let btnAttTask = document.querySelector("#btnAttTask");
let idtaskeditar = document.querySelector("#idtask-edit");
let itasknameEdit = document.querySelector("#itasknameEdit");


newTask.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let tarefa = {
            nome: newTask.value,
            id: gerarId(),
        }
        if (newTask.value == '') {
            alert("Digite o nome da tarefa")
        } else {
            addTarefa(tarefa);
        }
    }
});

janelaEditbtnclose.addEventListener('click', (e) => {
        alternarjEdit();
});

btnaddtask.addEventListener("click", (e) => {

    let tarefa = {
        nome: newTask.value,
        id: gerarId(),
    }
    if (newTask.value == '') {
        alert("Digite o nome da tarefa")
    } else {
        addTarefa(tarefa);
    }
});

btnAttTask.addEventListener('click', (e) => {
    e.preventDefault();

    let idTarefa = idtaskeditar.innerHTML.replace('#', '');

    let tarefa = {
        nome: itasknameEdit.value,
        id: idTarefa,
    }

    let tarefaAtual = document.getElementById('' + idTarefa + '');

    if (tarefaAtual) {
        let li = createTagli(tarefa);
        tasks.replaceChild(li, tarefaAtual);
        if(itasknameEdit.value == ''){
            alert('Digite um valor para alteração')
        }else{
            alternarjEdit();
        }
        
    } else {
        alert('Elemento HTML não encontrado!')
    }

});

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function addTarefa(tarefa) {
    let li = createTagli(tarefa);
    tasks.appendChild(li);
    newTask.value = '';
}

function createTagli(tarefa) {
    let li = document.createElement("li");
    li.id = tarefa.id
    let span = document.createElement("span");
    span.classList.add("text-task");
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');
    let btnedit = document.createElement('button');
    btnedit.classList.add('btn-action')
    btnedit.innerHTML = '<i class="fa fa-pencil"></i>';
    btnedit.setAttribute('onclick', 'edit(' + tarefa.id + ')');

    let btndelet = document.createElement('button');
    btndelet.classList.add('btn-action')
    btndelet.innerHTML = '<i class="fa fa-trash"></i>';
    btndelet.setAttribute('onclick', 'delet(' + tarefa.id + ')');

    div.appendChild(btnedit);
    div.appendChild(btndelet);
    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function edit(idTarefa) {
    let li = document.getElementById('' + idTarefa + '')
    if (li) {
        idtaskeditar.innerHTML = "#" + idTarefa;
        itasknameEdit.value = li.innerText;
        alternarjEdit();
    } else {
        alert('Elemento HTML não encontrado!')
    }
}

function delet(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja Excluir?')
    if (confirmacao) {
        let li = document.getElementById('' + idTarefa + '')

        if (li) {
            tasks.removeChild(li);
        } else {
            alert('Elemento HTML não encontrado!')
        }
    }
}

function alternarjEdit() {
    document.querySelector('.janelaEdit').classList.toggle('abrir');
    document.querySelector('.janelaEdicaoFundo').classList.toggle('abrir');
}