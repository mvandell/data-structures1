//<------------------------------------------PART 2---------------------------------------------->
const tickets = [2,3,2];
const k = 2;
let time = 0;

tickets[k] += 0.1;

let i = 0;
while (i<tickets.length) {

    if (tickets[i] === 1.1) {
        tickets.shift();
        time++;
        break;   
    } else if (tickets[i] === 1) {
        tickets.shift();
        time++;
    } else{
        tickets[i]--;
        let hold = tickets.shift();
        tickets.push(hold);
        time++;
    }
}

console.log(time);