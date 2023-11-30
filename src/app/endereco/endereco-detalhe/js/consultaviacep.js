async function buscarCEP(){
  limpar();
  var cepInformado = document.getElementById('cep').value;
  cepInformado = cepInformado.replace('-', '');

  var cepValido = validarCEP(cepInformado);
  if(cepValido){
      fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
      .then(resultado => resultado.json())
      .then(json => {
          if(json.erro){
              mostrarTelaErro();
          }else{
              preencherCamposComJSON(json);
          }
      })
      .catch(erro => {
          mostrarTelaErro();
      })
  }
}

function preencherCamposComJSON(json){
  if(json.bairro){
      bairro.value = json.bairro;
  }else{
      bairro.disabled = false;
  }

  if(json.logradouro){
      rua.value = json.logradouro;
  }else{
      rua.disabled = false;
  }

  estado.value = json.uf;
  cidade.value = json.localidade;
  cidade.disabled = true;
  estado.disabled = true;
}

function limpar(){
  formulario.style = 'background-color: aqua';
  rua.value = '';
  bairro.value = '';
  cidade.value = '';
  estado.value = '';
  bairro.disabled = true;
  rua.disabled = true;
  cidade.disabled = true;
  estado.disabled = true;
}

function mostrarTelaErro(){
  limpar();
  formulario.style = 'background-color: red';
  alert('CEP informado não existe');
}

function validarCEP(cepFormatado){
  var fieldsetCep = document.getElementById('fieldset-consulta-cep');
  var cepValido = false;
  if(cepFormatado.length == 8){
      fieldsetCep.style = 'background-color: purple';
      cepValido = true;
  }else{
      fieldsetCep.style = 'background-color: orange';
  }

  return cepValido;
}

async function salvarEndereco(){
 const rua = document.getElementById("rua").value;
 const bairro = document.getElementById("bairro").value;
 const cidade = document.getElementById("cidade").value;
 const estado = document.getElementById("estado").value;
 const numero = document.getElementById("numero").value;


 if (!rua || !bairro || !cidade || !estado || !numero) {
  alert("Preencha todos os campos");
  return;
}

const response = await fetch("http://localhost:8080/api/endereco/cadastrar", {
        method: "POST",
        body: JSON.stringify({
          rua,
          bairro,
          cidade,
          estado,
          numero,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    if (response.ok) {
      // Se o cadastro foi bem-sucedido, exiba uma mensagem de sucesso
      alert("Cadastrado com sucesso!");
      limpar();
  } else {
      // Se ocorreu um erro, exiba uma mensagem de erro
      alert("Erro ao cadastrar. Verifique os campos e tente novamente.");
  }

}
