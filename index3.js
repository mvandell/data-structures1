//<------------------------------------------PART 3---------------------------------------------->
const heights = [1,1,4,2,1,3];
const target = [1,1,1,2,3,4];
let move = 0;

for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== target[i]) {
        move++;
    }
}

console.log(move);