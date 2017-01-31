# Desenvolvimento Dirigido a Testes (TDD)
Esse exercício irá testar sua habilidade para escrever código baseados no teste que te será entregue. Usando o Desenvolvimento Dirigido a Testes (TDD), primeiro você escreve o teste para a funcionalidade que você irá implementar. Então, você escreve o código do método cujo qual você inicialmente escreveu o teste.

O teste desse exercício te será entregue, mas ele que irá te guiar na implementação da função, convertToChange(). convertToChange() deve aceitar como parametro um numero inteiro que representará os centavos (e.g. R$0,89 = 89) e retornar um array com as moedas que podem ser adicionadas somando esse número. Tenha em mente que o array de moedas deve dar prioridade aos maiores valores. Por exemplo, se o parâmetro for 26, você deve retornar 1 centavo e 25 centavos, mesmo que exista outras combinações de moedas possíveis (e.g. 2 moedas de 10 centavos, 1 moeda de 5 centavos e 1 moeda de 1 centavo).

Rode o teste nesse exercício e veja o que ele espera como saída. Então, implemente a função convertToChange() no changeHandler.js para verificar se o teste passa.
