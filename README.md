# ufscar-front-end

## 1) [Solução aqui](01)

## 2) Soluções:
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

## 3) [Solução aqui](03)

## 4) ***Explique com suas palavras qual a função da factory “Agenda”.***

Primeiramente **factory** e **services** tem exatamente a mesma função no ecosistema do Angular 1, ambos são singletons podem ser utilizados com passagem de referência sem a necessidade de criar instancias, porem, no caso especifico de **factory** é possível utilizar a palavra `new` afim de criar uma nova instância na mémoria e não ter informações shared entre controllers e serviços;

Como o código é ligeiramente simples, retornando o serviço `$resource`  mapeando o `@id` e `@action` além de adicionar o método `update` com o verbo `PUT`.

Eu teria feito algo mais simples como:
```javascript
angular.module('agenda')
  .factory('Agenda', Agenda);

Agenda.$inject = ['$resource'];

function Agenda($resource) {
  return $resource('agenda/:id', null, {
    'update': { method:'PUT' }
  });
}
```

Só é necessário utilizar o segundo parâmetro como objeto caso você precise informar que `:id` não segue a convenção, do contrário ele encontrará o atributo `id` no próprio recurso. Também não acho bom utilizar `action` como parâmetro do recurso, isso fere alguns princípios do REST como utilizar os verbos HTTP.

## 5) ***Como devo iniciar um projeto em AngularJS usando single page application (SPA). Explique com suas palavras e faça um exemplo da estrutura inicial do projeto.***

Primeiro eu analisaria o tamanho e escopo do projeto; Segundo verificaria os módulos necessários que já estão disponíveis e outras coisas que eu poderia aproveitar e isolar em serviços da aplicação.

Quanto a estrutura eu prefiro a convenção **folder by feature** ao invés de **folder by type** mas isso é um gosto em particular.

```bash
- /app
    -/agenda
        -/agenda.js
        -/agenda.controller.js
        -/agenda.service.js
        -/agenda.route.js
        -/agenda.template.html
    -/user
        -/user.js
        -/user.controller.js
        -/user.service.js
        -/user-validations.service.js
        -/user.template.html
    -/utils
        -/awesome-utils.js
    - application.js
    - config.js
    - application.route.js
    - application.template.html
- /public
    -/assets
        -/images
        -/styles
        - index.html
- /vendors
```

## 6) [Solução aqui](06)