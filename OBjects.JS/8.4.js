const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const letters= {}
function count (x){
for (const element of x){
    const lower = element.toLowerCase();
    for (const chserie of lower){
        if (letters[chserie]){
            letters[chserie]++;
        }
        else {letters[chserie]=1;}
    }
}
return letters;
}

let x = count(array);
console.log(x, "\n");