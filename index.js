//<------------------------------------------PART 1---------------------------------------------->
let s = " ] ] [ [";
const openers = { "(": false, "{": false, "[": false };

function validBrackets(string) {
    if (string.length % 2 !== 0) return false;
    
    const str = string.split("");

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === ")" || str[i] === "{" || str[i] === "}" || str[i] === "[" || str[i] === "]") {
            switch (str[i]) {
                case "(":
                    openers["("] = true;
                    break;
                case ")":
                    if (openers["("] === false) {
                        return false;
                    }
                    openers["("] = false;
                    break;
                case "{":
                    openers["{"] = true;
                    break;
                case "}":
                    if (openers["{"] === false) {
                        return false;
                    }
                    openers["{"] = false;
                    break;
                case "[":
                    openers["["] = true;
                    break;
                case "]":
                    if (openers["["] === false) {
                        return false;
                    }
                    openers["["] = false;
                    break;
            }
            return true;
        }
        else continue;
    }
}

console.log(s, validBrackets(s))