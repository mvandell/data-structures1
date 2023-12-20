//<------------------------------------------PART 4---------------------------------------------->
const deck = [17,13,11,2,3,5,7];
const stack = [];

let i = deck.length - 1;
while (deck.length > 0) {
    if (deck[i-1]) {
        stack.push(deck.pop());
        i--;
        stack.unshift(deck.pop());
    }
    else {stack.push(deck.pop())}
}

console.log(stack)