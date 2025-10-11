///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page


let readAString=(input)=>{
    let factors = input.split(":")[0].trim().split(" ").map(x => parseInt(x));
    let multiples = input.split(":")[1].trim().split(" ").map(x => parseInt(x));
    let sum = 0;
    factors.forEach(f => {
        multiples.forEach(m => {
            if (m % f == 0) {
                sum += m;
            }
        });
    });
    alert(sum + " : " + factors.join(" ") + " : " + multiples.join(" "));
}

