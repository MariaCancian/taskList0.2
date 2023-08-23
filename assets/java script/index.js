//Funções para página híbrida
function changePage() {
    document.getElementById("log-inPage").style.display = "none";
    document.getElementById("listPersonMain").style.display = "block";
  }
  function comeBack() {
    document.getElementById("log-inPage").style.display = "block";
    document.getElementById("listPersonMain").style.display = "none";
  }
  
  //Criando classe para pessoa
  class Person {
    constructor(name, email, birthdayDate, age, city, telephone, cpf, client) {
      this.name = name;
      this.email = email;
      this.birthdayDate = birthdayDate;
      this.age = age;
      this.city = city;
      this.telephone = telephone;
      this.cpf = cpf;
      this.client = client;
    }
  }
  
  //Criando classe para armazenar as pessoas
  class PersonList {
    constructor() {
      this.persons = [];
    }
  
    addPerson(person) {
      this.persons.push(person);
    }
  }
  
  //Criando instância do Array
  const personList = new PersonList();
  
  //Declarando contagem de clientes cadastrados
  let clients = 0;
  
  //Função para adicionar uma nova pessoa
  function addNewPerson() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const telephone = document.getElementById("telephone").value;
    const cpf = document.getElementById("cpf").value;
  
    let isAlreadyRegistered = false;
  
    personList.persons.forEach((person) => {
      let theCPF = person.cpf;
      const newCpf = theCPF.replace(/[.-]/g, '');
      if (newCpf == cpf) {
        isAlreadyRegistered = true;
        document.getElementById('invalid').innerHTML = "CPF já cadastrado";
  
      setTimeout(() => {
        document.getElementById('invalid').innerHTML = "";
      }, 4000);
      }
      if (person.email == email) {
        isAlreadyRegistered = true;
        document.getElementById('invalid').innerHTML = "Email já cadastrado";
  
      setTimeout(() => {
        document.getElementById('invalid').innerHTML = "";
      }, 4000);
      }
      console.log(theCPF);
      console.log(newCpf);
  
    });
  
  if (!isAlreadyRegistered) {
    if (name == '' || age == '' || email == '' || city == '' || telephone == '' || cpf == '') {
      document.getElementById('invalid').innerHTML = "Prencha todos os campos!";
  
      setTimeout(() => {
        document.getElementById('invalid').innerHTML = "";
      }, 3000);
    } else {
      const dateTidy = birthdayDateBr();
      const ageTidy = personAge();
      const telephoneTidy = separingTelephone();
      const cpfTidy = separingCpf();
      const clientTidy = possibleClient();
  
      document.getElementById("totalClients").innerHTML = clients;
  
      const newPersonAdd = new Person(name, email, dateTidy, ageTidy, city, telephoneTidy, cpfTidy, clientTidy);
      personList.addPerson(newPersonAdd);
  
      showOnHtml();
  
      document.getElementById('formsConcluid').innerHTML = "Parabéns, seu cadastro foi concluído! Encaminhado para lista de espera.";
  
      setTimeout(() => {
        document.getElementById('formsConcluid').innerHTML = "";
      }, 4000);
  
      console.log(personList);
  
      cleanFields();
    }
  }
  
  }
  //Função para calcular a idade
  function personAge() {
    const birthdayDate = document.getElementById("age").value;
    const personYear = new Date(birthdayDate).getFullYear();
    const todayYear = new Date().getFullYear();
    const personMonth = new Date(birthdayDate).getMonth() + 1;
    const todayMonth = new Date().getMonth() + 1;
  
    const ageYear = todayYear - personYear;
  
    if (personMonth > todayMonth) {
      return ageYear - 1;
  
    } else {
      return ageYear;
    }
  }
  
  
  //Função para converter a data
  function birthdayDateBr() {
    const date = document.getElementById("age").value;
    const newDate = date.split("-").reverse().join("/");
    //dia/mes/ano
  
    return newDate;
  }
  
  //Função para saber se é um possível cliente
  function possibleClient() {
    const age = personAge();
    if (age < 18 || age > 26) {
      return "Não é um possivel cliente";
    }
    if (age >= 18 && age <= 26) {
      clients++;
      return "É um possivel cliente";
    }
  }
  
  //Função para limpar campos
  function cleanFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("cpf").value = "";
  }
  
  //Função para mostrar as informações na tela
  function showOnHtml() {
    const date = birthdayDateBr();
    let msg = "";
    personList.persons.forEach((person) => {
      msg += `<div>
              <p><strong>Nome:</strong>${person.name}</p>
              <p><strong>Email:</strong>${person.email}</p>
              <p><strong>Data de nascimento:</strong>${date}</p>
              <p><strong>Idade:</strong>${person.age}</p>
              <p><strong>Cidade:</strong>${person.city}</p>
              <p><strong>Telefone:</strong>${person.telephone}</p>
              <p><strong>CPF:</strong>${person.cpf}</p>
              <p><strong>Possivel cliente:</strong>${person.client}</p>
              </div>`;
    });
  
    document.getElementById("newPersonInfos").innerHTML = msg;
  }
  
  //Função para pontuar CPF
  function separingCpf() {
    const cpf = document.getElementById("cpf").value;
  
    const arrCpf = cpf.split("");
  
    arrCpf.splice(3, 0, ".");
    arrCpf.splice(7, 0, ".");
    arrCpf.splice(11, 0, "-");
    //000.000.000-00
  
    return arrCpf.join("");
  }
  
  //Função para pontuar o telefone
  function separingTelephone() {
    const tell = document.getElementById("telephone").value;
  
    const arrTell = tell.split("");
  
    arrTell.splice(0, 0, "(");
    arrTell.splice(3, 0, ")");
    arrTell.splice(4, 0, " ");
    arrTell.splice(10, 0, "-");
    //00 00000-0000
  
    return arrTell.join("");
  }