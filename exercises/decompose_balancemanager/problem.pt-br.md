# Separação de Preocupações (SoC) 1
Esse arquivo irá mostrar o conceito de Separação de Preocupações (ou de conceitos). Nosso arquivo 'vendingMachine.js', é muito grande e contém muitas funções. Para simplificar nosso código e facilitar sua manutenção, vamos agrupar as funções em seus próprios arquivos.

Para completar esse exercício, pegue os 4 métodos e quaisquer variáveis que sejam relacionadas ao gerenciamento do caixa e mova para 'balanceManager.js'. Então, volte para vendingMachine.js, mude o método de chamada dessas funções de 'this' para o novo 'balanceManager'.

É isso! Mova esses 4 métodos, garanta que eles estão sendo chamados a partir de 'balanceManager', rode os testes, assim teremos funcionando o gerenciador do caixa como parte da nossa máquina de vendas.