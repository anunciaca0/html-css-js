const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um framework de CSS",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "v myVar;",
        "variável myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método usado para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
      respostas: [
        "msgBox()",
        "alert()",
        "prompt()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function: minhaFuncao()",
        "função minhaFuncao()",
        "function minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '10' + 5 em JavaScript?",
      respostas: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
      respostas: [
        "getElementById()",
        "querySelector()",
        "getById()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita",
        "Atribuição",
        "Comparação solta",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve 'Olá, Mundo!' no console em JavaScript?",
      respostas: [
        "console.log('Olá, Mundo!')",
        "print('Olá, Mundo!')",
        "log('Olá, Mundo!')",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 10 % 3 em JavaScript?",
      respostas: [
        "3",
        "1",
        "0",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set();
  const mostrarTotal = document.querySelector('#acertos span');
  const totalDePerguntas = perguntas.length;
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  

  //loop ou repetição
    for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) =>{
         const estaCorreta = event.target.value == item.correta 

         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }

         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas   
         
      }      
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca pergunta na tela
  quiz.appendChild(quizItem)
  }