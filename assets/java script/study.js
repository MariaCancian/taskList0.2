function showUsers(){
    document.getElementById("main-div").classList.add("hidden");
    document.getElementById("sub-div").classList.remove("hidden");
}

function showRegister(){
    document.getElementById("main-div").classList.remove("hidden");
    document.getElementById("sub-div").classList.add("hidden");

    console.log("passou pela função showRegister() ")
}
//criar sempre uma class e nela referenciar o user(como se fosse um "id" para class, logo após criar um contructor,e nele colocar uma parametro)
class User{
constructor(name, salario, despezas, receita){
    this.name = name;
    this.wage = salario;
    this.expenses = despezas;
    this.receipt = receita;
}
}

//em seguida criar uma class cujo tenha um array vazio para armazenar os valores
class UserList{
    constructor(){
        this.users= [];
    }
    //vemos que após o this o user terá que ser no plural e sem parametro

    //agora irei fazer o adicionar pessoas pos se um armazena o outro adiciona para que tenha mais de um acesso
    addUser(user){
        this.users.push(user);
    }
    // podemos ver que é necessario que temos que colocar uma parametro cujo pode ser qualquer nome desde que elee tenha referencia,
    // utilizamos o this para refeerenciar ao this logo acima, em seguida colocamos o users que é nosso array vazio
    //pos iremeos puxar desse array nossos valores e com ele adicinar novos users, por isso o método push
    // e o user do parametro foi só utilizado para fazer a referencia do parametro do addUser.
}


// agora para fazer com que isso tenha uma funcionalidade temos que criar uma instancia, para como o próprio nome já diz
//para instanciar a class.

const userList = new UserList();



// agora passaremos o método de adicionar 

function createUser(){
    const name = document.getElementById("name").value;
    const salario = document.getElementById("wage").value;
    const despezas = document.getElementById("expenses").value;
    const receita = document.getElementById("receipt").value;
//adicionamos a function para criação de novos users


    const newcreateUser = new User(name, salario, despezas, receita );
    //estanciamos para que nossa function seja funcional
    userList.addUser(newcreateUser);
    console.log(userList);

 showOnHtml();
 cleanFields();
}

function showOnHtml(){
    let html = "";
    userList.users.forEach((user)=> {
        html+= `<div>
        <p><strong>nome:</strong>${user.name}</p>
        <p><strong>salario:</strong>${user.wage}</p>
        <p><strong>despezas:</strong>${user.expenses}</p>
        <p><strong>receita:</strong>${user.receipt}</p></div>`
    })

    document.getElementById("user-list").innerHTML=html;
}

function cleanFields(){
    document.getElementById("name").value= "";
    document.getElementById("wage").value= "";
    document.getElementById("expenses").value= "";
    document.getElementById("receipt").value= "";
}
