# ufscar-front-end

#### Soluções:

1) [Solução aqui](01)

2) Soluções:
```javascript
/**
* A DOM API não possui o método "getElementByID";
* um node da DOM API não possui o método "onClick"
* Solução abaixo:
*/
document.getElementById("btnCalcular").onclick = receberValor;
```

```javascript
/**
* A função "receberValor" deve passar executar 2 prompts e passar ambos os 
* argumentos recebidos para a função "calcAreaTriangulo", porem o "altura"
* é uma variável cirada em CamelCase "Altura" o que faz a função quebrar;
* Solução abaixo:
*/
function receberValor() {
    var altura = prompt("Informar a altura do triângulo: ");
    var base = prompt("Informar a base do triângulo: ");
    calcAreaTriangulo(altura,base);
}
```

```javascript
/**
* O último erro encontrado foi o método "Write" em "document", novamente foi um
* erro de typo pois deveria ser escrito em lowercase:
* Solução abaixo:
*/
document.write("O resultado é "+ resultado );
```

As últimas considerações são:

1. A função `calcAreaTriangulo` deveria renderizar o valor/texto em um outro container e não diretamente reescrever o body.
2. A função `receberValor` deveria validar as entradas antes de seguir o processo para verificar o tipo dos dados e outras validações, onde é possível informar um erro ao usuário e talvez utiliza-la de forma recursiva caso queira que o fluxo continue até ser válido.

#### Fluxo:

1. Ao carregar a página fazemos o bind do elemento com ID `btnCalcular` e adicionamos ao evento `click` a função `receberValor`;
2. `receberValor` é responsável por exibir 2 prompt's ao usuário para coletar os valores de `@altura` e `@base` de um triângulo, que ao final do processo passa as informações para a função `calcAreaTriangulo`;
3. `calcAreaTriangulo` calcula a área do triângulo baseado nos 2 parâmetros `@altura` e `@base` e com isso reescreve o documento html com o resultado;

3) [Solução aqui](03)
