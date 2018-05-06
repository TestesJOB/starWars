# starWars
Desenvolvido para a vaga de estagiária.
-react OK
-TS OK
-Axios OK
-API OK

# 17/04/2018 - Teste Syligo Health

## Especificação
O desafio consiste em criar uma página em Javascript e Typescript, usando ReactJS, que vai:
1. conectar-se a uma API / Webservice;
1. após trazer os dados da API, vai listar em uma tabela (table) parte dos dados trazidos;
1. depois de renderizar a tabela no ReactJS, o usuário poderá clicar em uma das linhas, que redirecionará para os detalhes daquele item;

## Especificação técnica
1. Usar a api: https://swapi.co/ e trazer 50 personagens de Star Wars (ex. https://swapi.co/api/people/1/ para o primeiro personagem, https://swapi.co/api/people/2/  para o segundo e assim por diante. (Dica: usar a lib *axios* para fazer o GET request)
1. Armazenar esses dados no state do seu componente (quando estudar react, entenda bem o que é o *state*);
1. Criar um component para listar todos os personagens, mostrando os seguintes itens em uma table: "name", "height", "mass" e "birth_year"; 
1. Na sua lista, implementar um delete de personagem da state do redux (pode ser um botão simples no canto de cada linha da sua lista de personagem)
1. Na sua lista, criar uma página individual para cada personagem, mostrando os demais itens retornados pela API. (Dica: usar react-router para redirecionar de por exemplo: localhost:3000/characters para localhost:3000/characters/1)
1. Enviar para o seu github e nos passar o link do teste.

## Dicas
1. Há alguns livros de javascript na pasta: https://www.dropbox.com/sh/9kn9e1vhls20aq2/AABM_NFUJVdQMJbhZnPUlEUXa?dl=0 Esses são importantes para você começar a entender a sintaxe. Para ir direto ao ponto, baixe o You  Don’t Know Javascript e leia os 2 primeiros capítulos. (https://www.dropbox.com/s/howihpwrtacb6n1/You%20Don%27t%20Know%20JS%20%E2%80%94%E2%80%94%20Up%20%26%20Going.pdf?dl=0)
1. Você vai precisar de um editor de código. Recomendo https://code.visualstudio.com/ (também tem para o Linux)
1. você vai precisar baixar o NodeJS: https://nodejs.org/en/ ; junto com o NodeJS, vem instalado um gerenciador de pacotes, chamado npm https://www.npmjs.com/ -> Ambos vão permitir você “compilar” códigos javascript e baixar bibliotecas para usar nos projetos.
1. Sobre o GitHub, para você salvar seu repositório. Crie um novo repositório em New Repository e siga as instruções do GitHub para você salvar esse repositório no seu computador, aí pode começar a fazer o código. Pode usar aquele GitHub App.
1. Usar o tutorial: https://reactjs.org/tutorial/tutorial.html

### Typescript
1. usar o create-react-app *TypeScript*;
1. o typescript é Javascript, mas com uma camada de tipagem -> veja https://www.typescriptlang.org/docs/home.html
