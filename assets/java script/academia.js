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
   constructor(name, cpf, birthdate, cellphone, address, gender, age){
       this.name = name;
       this.cpf = cpf;
       this.birthdate = birthdate;
       this.cellphone = cellphone;
       this.address = address;
       this.gender = gender;
       this.age = this.calculatorAge()
   }
   calculatorAge(){
       console.log("passou pela conta de idade")
       const birthdate = this.birthdate;
       const birthYear = new Date(birthdate).getFullYear();
       const weYear = new Date().getFullYear();
       const birthMonth = new Date(birthdate).getMonth() + 1; 
       const  weMonth = new Date().getMonth()+1;
   
       const age = weYear - birthYear;
       if(birthMonth > weMonth){
           return age -1;
       }else{
           return age;
       }
   }
}
//class array das informações
class ListUsers{
   constructor(){
       this.users = [];
   }

   addUsers(param){
      if(inputEmpty()==false){
       return errorMsg("preencha todos os campos");
      }else if(!valida_cpf(param.cpf)){
       return errorMsg("cpf inválido");
      }else if(isAlreadyRegistered(param.cpf)){
       console.log("não passou pela função verificar cpf")
      return errorMsg("cpf já cadastrado")
      }else{
        successMsg("cadastrado com sucesso!")
       this.users.push(param);
       
      }}
      getAll() {
       console.log("Passou pelo getAll() da class AllUsers");

       return this.users;
   }

}

const arrUsers = new ListUsers();

function createUsers(){
   let name = document.getElementById("name").value;
   let cpf = document.getElementById("cpf").value;
   let birthdate = document.getElementById("birthdate").value;
   let cellphone = document.getElementById("cellphone").value;
   let address = document.getElementById("address").value;
   let gender = document.getElementById("gender").value;



      
   const user = new User(name, cpf,birthdate, cellphone, address, gender)
   let age = user.calculatorAge();
  arrUsers.addUsers(user);
  
  clearFields();

  console.log(arrUsers.getAll());
}

//function de verificar inputs vazios
function inputEmpty(){
   let name = document.getElementById("name").value;
   let cpf = document.getElementById("cpf").value;
   let birthdate = document.getElementById("birthdate").value;
   let cellphone = document.getElementById("cellphone").value;
   let address = document.getElementById("address").value;
   let gender = document.getElementById("gender").value;

   if(name == ''|| cpf ==''||birthdate == ''|| cellphone == ''|| address == ''|| gender == ''){
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
       <p> Data de aniversário:${dateBr(user.birthdate)}</p>
       <p>Idade:${user.age} anos</p>
       <p>telefone:${formatedCellphone(user.cellphone)}</p>
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
       <p> Data de aniversário:${dateBr(user.birthdate)}</p>
       <p>Idade:${user.age} anos</p>
       <p>telefone:${formatedCellphone(user.cellphone)}</p>
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
function formatedCellphone(cellphone) {
   console.log("Passou pela funcao formatedCellphone()");

   let cellphoneArray = cellphone.split("");
   let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
       + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
       + cellphoneArray[5] + cellphoneArray[6] + "-"
       + cellphoneArray[7] + cellphoneArray[8]
       + cellphoneArray[9] + cellphoneArray[10];
   return cellphoneFormated;
}
function dateBr(date){
console.log("Passou pela funcao dateBr()");

let dateArray = date.split("-");
let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
return datePTBR;
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
   document.getElementById("error").style.display='block';
   setTimeout(function () {
       document.getElementById("error").style.display='none';
   }, 4000);
}
function successMsg(msg){
   console.log("passou pelo success msg")
   document.getElementById("success").innerHTML = msg;
   document.getElementById("success").style.display='block';
   setTimeout(function () {
       document.getElementById("success").style.display='none';
   }, 4000);
}

function isAlreadyRegistered(cpf) {
   console.log("Passou pela funcao isAlreadyRegistered()");

   let users = arrUsers.getAll();
   let isRegistered = false;
   users.forEach((user) => {
       if (user.cpf == cpf) {
           isRegistered = true;
       }
   });
   return isRegistered;
}
