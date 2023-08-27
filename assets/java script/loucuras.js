// //inciando código
// let flag = -1;
// //primeira class vai conter as informções necessárias para as lógicas
// class TaskList {
//     constructor(title, id, status){
//         this.title = title;
//         this.id = id;
//         this.status = status;
//     }
// }
// //segunda class será nosso array

// class ArrList{
//     constructor(){
//         this.tasks = [];
//     }
//     //armazenando no array
//     addTask(task){
//         this.tasks.push(task)
//     }
//     //marcando o botão
//     markTask(id) {
//         this.tasks.forEach(task => {
//             if (task.id == id) {
//                 task.status == !task.status;
//             }
//         });
//         document.getElementById(id + '-button').classList.toggle('taskDone');
//     }
//     //removendo
//     removeTask(id) {
//         this.tasks = this.tasks.filter((task) => task.id !== id);
//     }

//     //botão de editar

    
// }

// //chamando instância
// veryBigList = new ArrList();

// function createList(){
//     const valor = document.getElementById('InputAdd').value;
//     if (flag > 0) {

//         taskEdit = '';

//         veryBigList.tasks.forEach(task => {
//             if (task.id == flag) {
//                 taskEdit = task;
//             }
//         });

//         taskEdit.title = valor;
//         flag = -1;

//     } else {
//         const task = new TaskList(valor, generateId(), false);
//        veryBigList.addTask(task);
//     }
//     renderTasks();
//     clenField();
// }


// //dando valor para os ids
// function generateId() {
//     return Math.floor(Math.random() * 9999);
// }

// //trazendo pro html
// function renderTasks() {
//     let element = "";

//     veryBigList.tasks.forEach(task => {
//         element += ` <li id="${task.id}">
//         <span id="${task.id}-title">${task.title}</span>
//          <div>
//          <button id="${task.id}-button" class="action verifyed"
//              onclick="doneTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></i>
//         </button>
//         <button class="action verifyed edit" onclick="editTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></button>
//         <button class="action verifyed remove"id="remove-btm" onclick="deleteTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
//         </div>
//         </li>`;
//     });
//     //exibiu o element
// document.getElementById("result").innerHTML = element;
// }

// //treco do verdinho
// function doneTask(id) {
//     veryBigList.markTask(id);
// }


// //chamando o de remover
// function deleteTask(id) {
//     veryBigList.removeTask(id);
//     renderTasks();
// }

// //fazendo o edit
// function editTask(id){

//     let taskEdit = ''
//     flag = id

//     veryBigList.tasks.forEach(task => {
//         if (task.id == id) {
//             taskEdit = task
//         }
//     });

//     document.getElementById('InputAdd').value = taskEdit.title


// }


// //limpando o input
// function clenField(){
//     document.getElementById("InputAdd").value = "";
// }



// function createPeople(){
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let date = document.getElementById("date").value;
//     let cell = document.getElementById("cell").value;
//     let cpf = document.getElementById("cpf").value;
//    let data = new Date(date);

//     if (data.setHours(20) > new Date()) {
//         let msg = document.getElementById('teste');
//         msg.innerHTML = 'Preencha com a data menor q a atual';
//         return;
//       }else{
    
//      if(name == '' || email == '' || date == '' || cell == '' || cpf == ''){
      
//     test = `<p id="test"> Todos os campos devem ser preenchidos</p>`
//         document.getElementById("teste").innerHTML = test; 
//         setTimeout(()=>{
         
//           }, 3000)

//     } else{
//     const list = new List(name, email, date, cell, cpf);
   
//    showHtml();
//      pessoas.addPeople(list);

//     cleanInput();
   
//      console.log(pessoas);
//      test = `<p id="cadrastro"> cadastro concluído</p>`;  
//        document.getElementById("teste").innerHTML = test;
   
//       ;}}
// }

//telas hibridas queridos

function registrationPage(){
    document.getElementById("main01").style.display = "none";
    document.getElementById("main02").style.display = "block";
    rengerUser();
}

function backRegistrationPage(){
    document.getElementById("main02").style.display = "none";
    document.getElementById("main01").style.display = "block";
}
function manPage(){
    document.getElementById("main02").style.display = "none";
    document.getElementById("main03").style.display = "block";
   
    document.getElementById("result-man-div").innerHTML = selectGenders("M");
}
function backBackPage(){
    document.getElementById("main03").style.display = "none";
    document.getElementById("main02").style.display = "block";
}
function womanPage(){
    document.getElementById("main02").style.display = "none";
    document.getElementById("main04").style.display = "block";
   
    document.getElementById("result-woman-div").innerHTML = selectGenders("F");
}
function backBackPage2(){
    document.getElementById("main04").style.display = "none";
    document.getElementById("main02").style.display = "block";
}
//criando class das informações
class User{
    constructor(name, cpf, cellphone, address, gender){
        this.name = name;
        this.cpf = cpf;
        this.cellphone = cellphone;
        this.address = address;
        this.gender = gender;
    }

}
//class array das informações
class ListUsers{
    constructor(){
        this.users = [];
    }

    addUsers(param){
        this.users.push(param);
    }

}

const arrUsers = new ListUsers();

function createUsers(){
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let cellphone = document.getElementById("cellphone").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;
    let veriInput = inputEmpty();
    let veriCadastro = cpfAlreadyRegistered();
    //verificação de true ou false
    if(veriInput == false){
      errorMsg("preencha todos os campos")
    }  else{
        if(veriCadastro == false){
        errorMsg("cpf já cadastrado")
    }else{
       
    const user = new User(name, cpf, cellphone, address, gender)
   arrUsers.addUsers(user);
   
   clearFields();
 successMsg("parabéns, cadastro concluído");
   console.log(arrUsers);}}
}

//function de verificar inputs vazios
function inputEmpty(){
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let cellphone = document.getElementById("cellphone").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;

    if(name == ''|| cpf ==''|| cellphone == ''|| address == ''|| gender == ''){
        console.log("n passou pelos inputs vazioz")
        return false;
    }else{
        console.log(" passou pelos inputs vazioz")
        return true;  
    }
}
function rengerUser(){
    let msg = '';
    arrUsers.users.forEach(user => {
        msg += `
        <p>Aluno(a):${user.name}</p>
        <p>CPF:${formatedCPF(user.cpf)}</p>
        <p>telefone:${user.cellphone}</p>
        <p>Endereço:${user.address}</p>
        <p>Genêro:${user.gender}</p>`
    });
    document.getElementById("result-div").innerHTML = msg;
}

function selectGenders(gender){
    let msg = '';
    arrUsers.users.forEach(user =>{
       if(gender == user.gender){
        msg += `
        <p>Aluno(a):${user.name}</p>
        <p>CPF:${formatedCPF(user.cpf)}</p>
        <p>telefone:${user.cellphone}</p>
        <p>Endereço:${user.address}</p>
        <p>Genêro:${user.gender}</p>`
       }
    });
    console.log(msg)
   return msg;
}

function clearFields(){
    document.getElementById("name").value= '';
    document.getElementById("cpf").value='';
    document.getElementById("cellphone").value='';
    document.getElementById("address").value='';
    document.getElementById("gender").value='';
}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}
function valida_cpf(cpf) {
    console.log(cpf);
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11){
        return false;}
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}
function errorMsg(msg){
    console.log("passou pelo error msg")
    document.getElementById("error").innerHTML = msg;
    document.getElementById("error").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error").classList.add("hidden");
    }, 4000);
}
function successMsg(msg){
    console.log("passou pelo success msg")
    document.getElementById("success").innerHTML = msg;
    document.getElementById("success").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success").classList.add("hidden");
    }, 4000);
}

function cpfAlreadyRegistered(numero){

   arrUsers.users.forEach(user =>{
    if(numero == user.cpf){
        return false;
    }else{
        return true;
    }
   });
   console.log("passou pela verificação cpf já cadastrado")

}