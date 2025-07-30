// Cria um array vazio que vai guardar as tarefas
var tarefas = [];
var form = document.getElementById("task-form");        // Seleciona o formulário do HTML (onde o usuário vai digitar a tarefa)
var input = document.getElementById("task-input");      // Seleciona o campo de entrada de texto do HTML
var list = document.getElementById("task-list");        // Seleciona a lista <ul> onde as tarefas vão aparecer


// Adiciona um ouvinte de evento para quando o formulário for enviado
form.addEventListener("submit", function (e) {
    e.preventDefault();                     // Impede o recarregamento da página ao enviar o formulário
    var texto = input.value.trim();         // Pega o texto digitado e remove espaços extras
    if (texto === "")                      // Se estiver vazio, não faz nada
        return;
    
    // Cria um objeto representando a nova tarefa    
    var novaTarefa = {
        id: Date.now(),             // Gera um ID único com base no momento atual
        texto: texto                // Salva o texto digitado na tarefa
    };
    tarefas.push(novaTarefa);       // Adiciona a tarefa ao array
    input.value = "";               // Limpa o campo de texto
    atualizarLista();              // Atualiza a lista exibida na tela
});

// Função que renderiza as tarefas na página
function atualizarLista() {
    list.innerHTML = "";                    // Limpa a lista atual
    tarefas.forEach(function (tarefa) {   // Para cada tarefa no array, cria um item <li> e adiciona à <ul>

        var item = document.createElement("li");   // Cria um novo elemento <li>
        item.textContent = tarefa.texto;           // Define o texto do item como a tarefa
        list.appendChild(item);                    // Adiciona o <li> à lista <ul>
    });
}
