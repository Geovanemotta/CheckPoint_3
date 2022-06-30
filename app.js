/* 
    01: Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
*/
function Aluno(nome, qtd_faltas, notas) {
    this.nome = nome;
    this.qtd_faltas = qtd_faltas;
    this.notas = notas;
  
/*  
    02: Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
    que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.
*/
    this.calcularMedia = function() {
      let notaDoAluno = 0;
      let qtd_notas = 0;
  
      for (let nota of this.notas) {
        notaDoAluno += nota;
        qtd_notas++;
      }
      return  notaDoAluno / qtd_notas;
    };
    
    this.faltas = function() {
        this.qtd_faltas++;
    };
  
}
  
//  Criando alunos com faltas e notas.

let aluno0 = new Aluno('Geovane Motta', 1, [9, 9, 8, 6]);
let aluno1 = new Aluno('Joaquim Akinfiev', 2, [3, 9, 8, 6]);
let aluno2 = new Aluno('Jonas Barros', 4, [9, 9, 8, 6]);
let aluno3 = new Aluno('Neymar Junior', 5, [8, 8, 5, 6]);
let aluno4 = new Aluno('Cristiano Ronaldo', 0, [7, 7, 7, 7]);
  
//  Lista de alunos existentes.

    let alunos = [aluno0, aluno1, aluno2, aluno3, aluno4];
  
  
//  Calculando a média do aluno.

      for (let aluno of alunos) {
        console.log("A média do " + aluno.nome + " é de: " + aluno.calcularMedia());
}
  
//  Teste para adicionar faltas para um aluno.

    aluno4.faltas()
        console.log("A quantidade atual de faltas do aluno: " + aluno4.qtd_faltas);
  
/* 
    03: Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), 
    faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
*/

    let curso = {
        nomeCurso: "Certified Tech Developer",
        notaAprovacao: 7,
        faltaMaxima: 3,
        listaDeEstudante: [aluno0, aluno1, aluno2, aluno3, aluno4],
  
/*
    04: Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
    deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

    addAlunos: function(novoAluno) {
      curso.listaDeEstudante.push(novoAluno);
    },
  
/*
    05: Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. 
    Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas.
    Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
*/

    Aprovado: function(aluno) {
      let mediaAluno = aluno.calcularMedia();
  
      if ( this.faltaEmedia(mediaAluno, aluno.qtd_faltas) || this.mediaAcima(aluno.qtd_faltas, mediaAluno)){
          return true;
      } else {
          return false;
      }
    },
  
    faltaEmedia: function(mediaAluno, faltas) {
      return mediaAluno >= curso.notaAprovacao && faltas < curso.faltaMaxima ? true : false;
    },
  
    mediaAcima: function(qtdFaltasAluno, mediaAluno) {
      if (qtdFaltasAluno == curso.faltaMaxima) {
        let notaAprovacaoA = curso.notaAprovacao + ((curso.notaAprovacao / 100) * 10);
        return mediaAluno > notaAprovacaoA ? true : false;
      }
    },
    
/*  
    06: Crie um método para o objeto curso que percorra a lista de estudantes e
    retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
*/

      alunosAprovados: function () {
      for (let aluno of this.listaDeEstudante){
        console.log("O aluno " + aluno.nome + " foi aprovado? " + curso.Aprovado(aluno));
      }
    }
};
  
//  Criando os novos alunos para serem adicionados
    let novoAluno5 = new Aluno("Jaiminho Machado", 3, [5, 6, 8, 9]);
    let novoAluno6 = new Aluno("Chaves do Oito", 2, [6, 2, 9, 7])
    let novoAluno7 = new Aluno("Dora Aventureira", 1, [10, 10, 10, 10])
  
    let novosAlunos = [novoAluno5, novoAluno6, novoAluno7];
  
//  Adicionar alunos novos.

    for (let aluno of novosAlunos) {
      curso.addAlunos(aluno);
}
  
//  Lista com novos alunos cadastrados.

    for (let aluno of curso.listaDeEstudante) {
      console.log(aluno.nome);
}
  
//  Verificando se aluno aprovou.

      console.log("O aluno " + aluno4.nome + " foi aprovado ?", curso.Aprovado(aluno4));

//  lista de alunos apovados e não aprovados.

      curso.alunosAprovados();