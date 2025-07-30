// Interface que define a estrutura de uma tarefa
interface Tarefa {
  id: number;       // Identificador único para cada tarefa
  texto: string;     // Texto ou descrição da tarefa
}

// Array que vai armazenar todas as tarefas criadas
const tarefas: Tarefa[] = [];

// Pegamos os elementos do HTML e usamos "as" para garantir a tipagem correta
const form = document.getElementById("task-form") as HTMLFormElement;     // Formulário onde o usuário adiciona uma tarefa
const input = document.getElementById("task-input") as HTMLInputElement;  // Campo de texto onde o usuário digita a tarefa
const list = document.getElementById("task-list") as HTMLUListElement;    // Lista <ul> onde as tarefas serão exibidas

// Escuta o envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();         // Evita o recarregamento da página ao enviar o formulário

  const texto = input.value.trim();   // Remove espaços do início/fim
  if (texto === "") return;           // Ignora se estiver vazio

  const novaTarefa: Tarefa = {        // Criamos uma nova tarefa com um ID único baseado no timestamp atual
    id: Date.now(),                   // ID único gerado com base no horário
    texto                              // Texto digitado pelo usuário
  };

  tarefas.push(novaTarefa);           // Adiciona a nova tarefa ao array
  input.value = "";                   // Limpa o campo de entrada após adicionar a tarefa  
  atualizarLista();                   // Atualiza a exibição na tela

});

// Função responsável por renderizar as tarefas na <ul>
function atualizarLista(): void {
  list.innerHTML = "";                    // Limpa a lista antes de preencher 
  tarefas.forEach((tarefa) => {
    const item = document.createElement("li");    // Cria um item <li>
    item.textContent = tarefa.texto;              // Define o texto da tarefa
    list.appendChild(item);                       // Adiciona o item à lista
  });
}