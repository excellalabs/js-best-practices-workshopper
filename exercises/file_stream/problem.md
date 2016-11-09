# Getting Rid of Switch Statements
Switch statements can be useful in simple cases, but they are often considered "code smells" when used to branch into clauses of complex logic. They also can be somewhat difficult to maintain compared to alternative value-retriever constructs like dictionaries. All in all, it's best to avoid switch statements if at all possible.

In this exercise, you should refactor the getAmount() method in changeHandler.js to completely remove the switch method while retaining its functionality. It doesn't matter what alternative you choose, but the method should not use a switch statement in any way.
