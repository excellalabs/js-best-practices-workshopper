# Se livrando de declarações Switch
Declarações Switch podem ser úteis em casos simples, mas normalmente são considerados "code smells*" quando usado com muitas cláusulas e lógica complexa. O Switch também pode ser difícil de dar manutenção comparado com alternativas construídas com value-retriever como dictionaries. Contudo, o melhor é evitar declarações Switch sempre que possível.

Nesse exercício, você deverá refatorar o método getAmount() no changeHandler.js e remover completamente a declaração Switch sem alterar a funcionalidade. Não importa qual alternativa você escolher, mas o método não deverá mais usar a desclaração switch de qualquer forma.

*code smells - código fedido em tradução literal, se refere a códigos de difícil leitura e manutenção.
