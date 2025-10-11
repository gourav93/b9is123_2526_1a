//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67


let parse=(i)=>{
      o=parseInt(i)
      if (isNaN(o))
        throw("NaN");
      return o;
}

let readAStringV1=(input) => {

    try{
         let factors = input.split(":")[0].trim().split(" ").map(x => parseInt(x));
         let multiples = input.split(":")[1].trim().split(" ").map(x => parseInt(x));

         if (factors.some(isNaN) || multiples.some(isNaN)) {
            throw new Error("Invalid Input");
         }

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

    catch(e){
        alert("corrupt : " + input.trim().split(":").join(""));
    }

}

let readAStringV2=(input) => {

    try{
         let factors = input.split(":")[0].trim().split(" ").map(x => x).filter(x => !isNaN(parseInt(x))).map(x => parseInt(x));
         let multiples = input.split(":")[1].trim().split(" ").map(x => x).filter(x => !isNaN(parseInt(x))).map(x => parseInt(x));

         if (factors.length === 0 || multiples.length === 0) {
            throw new Error("Invalid Input");
         }

         let sum = 0;
         factors.forEach(f => {
         multiples.forEach(m => {
            if (m % f == 0) {
                sum += m;
            }
          });
         });

        //alert(sum + " : " + factors.join(" ") + " : " + multiples.join(" ")); 
        alert(sum + " : " + input);

    }

    catch(e){
        if (e.message === "Invalid Input") {
            alert("corrupt : " + input);
        }
        
    }

}