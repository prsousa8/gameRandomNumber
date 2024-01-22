# Curso 02

## Lógica de Programação: explore funções e listas

- Selecionar e alterar conteudo elemento do html

~~~
let variavel = document.querySelector('<tag>');
variavel.innerHTML = "Text";
~~~

- Funções

As funções desempenham um papel central na programação e no desenvolvimento de software, permitindo encapsular blocos de código reutilizáveis e executáveis. 

- Tipos de Funções

    1. Sem retorno e sem parametro

    ~~~
    function nomeFuncao(){...}
    ~~~

    2. Sem retorno e com parametro

    ~~~
    function nomeFuncao(params){...}
    ~~~

    3. Com retorno e sem parametro

    ~~~
    function nomeFuncao(){
        return instrucao;
    }
    ~~~

    4. Com retorno e com parametro

    ~~~
    function nomeFuncao(params){
        return instrucao;
    }
    ~~~

    5. Função anônima

    ~~~
    let variavel = function(){...}
    ~~~

    6. Arrow Function

    ~~~
    let variavel = x => x*x;
    ~~~