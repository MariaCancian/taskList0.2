let flag = -1;

class Carro{
    constructor(id,name, preco, marca, ano, imagem){
        this.id = id;
        this.name = name;
        this.preco = preco;
        this.marca = marca;
        this.ano = ano;
        this.imagem = imagem;
      
    }
}
 class ListaCarros{
    constructor(){
        this.carros = [];
    }
    adicionar(param){
        if(verificarInputs()== false && isURLValida(param.imagem) == true){
            this.carros.push(param);
            envieMsg("Jogo adicionado com sucesso!", "success");
            limparInputs()
        }
    }
    removeCarro(id){
        this.carros = this.carros.filter((carro) => carro.id !== id);
    }

} 
 const biblioetecaCarros = new ListaCarros() 
 function criarCarro(){
    let name = document.getElementById("name").value;
    let preco = document.getElementById("preco").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("ano").value;
    let imagem = document.getElementById("imagem").value;
    if (flag > 0) {

        carroEdit = '';

        biblioetecaCarros.carros.forEach(carro => {
            if (carro.id == flag) {
                carroEdit = carro;
            }
        });

        carroEdit.name= name;
        carroEdit.preco= preco;
        carroEdit.marca= marca;
        carroEdit.ano= ano;
        carroEdit.imagem= imagem;
        flag = -1;
        
limparInputs()
    } else {
    const jogo = new Carro(generateId(), name,preco, marca, ano, imagem );
      
  biblioetecaCarros.adicionar(jogo)
    console.log(biblioetecaCarros);}

    renderizarConteudo();
}
function verificarInputs(){

    let name = document.getElementById("name").value;
    let preco = document.getElementById("preco").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("ano").value;
    let imagem = document.getElementById("imagem").value;
    let isEmpty = false;
  
    if (name == "") {
        errorMsg("Campo obrigatório", "error", "name");
        isEmpty = true;
    } else {
        errorMsg("", "", "name");
    }

    if (preco == "") {
        errorMsg("Campo obrigatório", "error", "preco");
        isEmpty = true;
    } else {
        errorMsg("", "", "preco");
    }

    if (marca == "") {
        errorMsg("Campo obrigatório", "error", "marca");
        isEmpty = true;
    } else {
        errorMsg("", "", "marca");
    }

    if (ano == "") {
        errorMsg("Campo obrigatório", "error", "ano");
        isEmpty = true;
    } else {
        errorMsg("", "", "ano");
    }

    if (imagem == "") {
        errorMsg("Campo obrigatório", "error", "imagem");
        isEmpty = true;
    } else if(!isURLValida(imagem)){
        errorMsg("url invalida", "erro", "imagem");
        return true;
    }else {
        errorMsg("", "", "imagem");
    }
    
        console.log("campos preenchidos")
        return false;
        }
    
    
    
    function envieMsg(msg, tipoMsg){
        let msgDiv = document.getElementById("msg");
        msg.innerHtml = '';
    
        let msgParaTela = `
        <p class="${tipoMsg}">${msg}</p>`;
    
        msgDiv.innerHTML = msgParaTela;
     
        setTimeout(function(){
            msgDiv.innerHTML = '';
  
        }, 3000)
    }
 
    
function limparInputs(){
    document.getElementById("name").value = '';
    document.getElementById("preco").value='';
    document.getElementById("marca").value='';
    document.getElementById("ano").value='';
    document.getElementById("imagem").value='';
}

function renderizarConteudo(){
    const listaHtml = document.getElementById("resultado");
    listaHtml.innerHTML="";
    const array =  biblioetecaCarros.carros
    array.forEach(carro => {
       const resultDiv= `
        <div class="jogoDetalhe">
        <p>Titulo:${carro.name}</p>
        <p>Preço:${carro.preco}</p>
        <p>Descrição:${carro.marca}</p>
        <p>${carro.ano}</p>
        <img src='${carro.imagem}' alt='${carro.name}'>
        <button onclick="deletecarro(${carro.id})">Apagar</button>
        <button onclick="editCarro(${carro.id})">editar</button>
        </div>`
        listaHtml.innerHTML += resultDiv;
    });

}
function isURLValida(imagem) {
    if(imagem.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
    
        return false;
    }
}
function generateId() {
    return Math.floor(Math.random() * 9999);
}
function deletecarro(id) {
   biblioetecaCarros.removeCarro(id);
   renderizarConteudo();
}
function editCarro(id){

    let carroEdit = ''
    flag = id
  
    biblioetecaCarros.carros.forEach(carro => {
        if (carro.id == id) {
            carroEdit = carro
        }
    });

    document.getElementById("name").value = carroEdit.name;
    document.getElementById("preco").value=carroEdit.preco;
    document.getElementById("marca").value=carroEdit.marca;
    document.getElementById("ano").value=carroEdit.ano;
    document.getElementById("imagem").value= carroEdit.imagem;
       

}
function errorMsg(msg, type, inputId) {
    const inputIdError = document.getElementById(`${inputId}-error`);

    if (msg) {
        inputIdError.innerHTML = `<p class="${type}">${msg}</p>`;
    } else {
        inputIdError.innerHTML = "";
    }
}
